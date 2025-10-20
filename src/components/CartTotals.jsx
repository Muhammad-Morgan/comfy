import { useSelector } from "react-redux";
import { formatPrice } from "../utiles";
const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  const cartAmount = formatPrice(cartTotal);
  const shippingAmount = formatPrice(shipping);
  const taxAmount = formatPrice(tax);
  const orderAmount = formatPrice(orderTotal);
  return (
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
  );
};

export default CartTotals;
