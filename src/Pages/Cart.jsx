import { CartItemsList, CartTotals, SectionTitle } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const user = useSelector((state) => state.userState.user);
  const { numItemsInCart } = useSelector(
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
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block uppercase mt-8 h-11"
            >
              check out
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block uppercase mt-8 h-11"
            >
              login to check out
            </Link>
          )}
        </article>
      </section>
    </>
  );
};

export default Cart;
