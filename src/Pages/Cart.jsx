import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { useSelector } from "react-redux";

const Cart = () => {
  const { numItemsInCart, CartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  if (numItemsInCart < 1) return <SectionTitle text="the cart is empty" />;

  return (
    <>
      <SectionTitle text="shopping cart" />
      <section className="mt-8 grid gap-8 lg:grid-cols-12">
        <article className="lg:col-span-8">
          <CartItemsList />
        </article>
        <article className="lg:col-span-4">
          <CartTotals />
        </article>
      </section>
    </>
  );
};

export default Cart;
