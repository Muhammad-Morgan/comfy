import { redirect } from "react-router-dom";
import { SectionTitle, CartTotals, CheckoutForm } from "../components";
import { toast } from "react-toastify";
import { customFetch, formatPrice } from "../utiles";
import { useSelector } from "react-redux";
import { cartCleared } from "../Features/Cart/cartSlice";
export const loader = (store, queryClient) => () => {
  const user = store.getState().userState.user;
  if (!user) {
    toast.warn("you need to log in");
    return redirect("/login");
  }
};

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    // /orders
    const { cartState: cart, userState } = store.getState();
    const token = userState.user.token;
    const { cartItems, orderTotal: chargeTotal, numItemsInCart } = cart;
    const orderTotal = formatPrice(chargeTotal);

    const orderCheckout = {
      data: {
        address,
        cartItems,
        chargeTotal,
        name,
        numItemsInCart,
        orderTotal,
      },
    };
    try {
      const response = await customFetch.post("/orders", orderCheckout, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      queryClient.removeQueries(["orders"]);
      store.dispatch(cartCleared());
      toast.success("order placed successfully");
      return redirect("/orders");
    } catch (error) {
      const message =
        error?.response?.data?.error?.message || "something went wrong !";
      toast.error(message);
      if (error?.response?.status === 401 || 403) return redirect("/");
      return null;
    }
  };

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartState.cartItems);
  if (cartItems.length === 0) return <SectionTitle text="your cart is empty" />;
  return (
    <>
      <SectionTitle text="place your order" />
      <section className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <CheckoutForm />
        <CartTotals />
      </section>
    </>
  );
};

export default Checkout;
