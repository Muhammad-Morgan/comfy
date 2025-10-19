import { useSelector } from "react-redux";
import { formatPrice } from "../utiles";
import { Link } from "react-router-dom";
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );
  const user = useSelector((state) => state.userState.user);
  const cartAmount = formatPrice(cartTotal);
  const shippingAmount = formatPrice(shipping);
  const taxAmount = formatPrice(tax);
  const orderAmount = formatPrice(orderTotal);
  return (
    <div className="lg:pl-4">
      <div className="card bg-base-200">
        <div className="card-body">
          <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>Subtotal</span>
            <span className="font-medium">{cartAmount}</span>
          </p>
          <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>Shipping</span>
            <span className="font-medium">{shippingAmount}</span>
          </p>
          <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>Tax</span>
            <span className="font-medium">{taxAmount}</span>
          </p>
          <p className="flex justify-between text-sm mt-4 pb-2">
            <span>Order Total</span>
            <span className="font-m">{orderAmount}</span>
          </p>
        </div>
      </div>
      {user ? (
        <button className="btn btn-primary btn-block uppercase mt-8 h-11">
          check out
        </button>
      ) : (
        <Link
          to="/login"
          className="btn btn-primary btn-block uppercase mt-8 h-11"
        >
          login to check out
        </Link>
      )}
    </div>
  );
};

export default CartTotals;
