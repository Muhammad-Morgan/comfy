import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../Features/Cart/cartSlice";
import { formatPrice } from "../utiles";

const CartItem = ({
  amount,
  cartID,
  productID,
  productColor,
  company,
  title,
  image,
  price,
}) => {
  const dispatch = useDispatch();
  const dollarAmount = formatPrice(price);

  return (
    <div className="mb-12 flex flex-col sm:flex-row gap-y-4 flex-wrap border-b border-base-300 last:border-b-0 sm:items-start sm:justify-between pb-6">
      <img
        src={image}
        alt={title}
        className="h-26 w-26 sm:h-32 sm:w-32 rounded-box shadow-sm object-cover"
      />
      <div className="grid sm:ml-16 sm:w-48">
        <h3 className="text-md tracking-wider font-bold mb-2">{title}</h3>
        <h5 className="text-sm tracking-wide text-neutral-content">
          {company}
        </h5>
        <div className="my-3 sm:my-1">
          <span className="text-sm tracking-wide">Color : </span>
          <div
            className="ml-1 badge badge-xs md:badge-sm"
            style={{ backgroundColor: `${productColor}` }}
          ></div>
        </div>
      </div>
      <div className="grid gap-y-1 sm:ml-12">
        <label htmlFor="amount" className="text-sm tracking-wide">
          Amount
        </label>
        <select
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) =>
            dispatch(editItem({ cartID, amount: Number(e.target.value) }))
          }
          className="my-2 select select-base select-bordered select-xs cursor-pointer"
        >
          {Array.from({ length: amount + 5 }, (_, index) => {
            const quantity = index + 1;
            return (
              <option key={quantity} value={quantity}>
                {quantity}
              </option>
            );
          })}
        </select>
        <button
          onClick={()=> dispatch(removeItem({ cartID }))}
          className="link link-primary link-hover text-sm mr-auto tracking-wide"
        >
          Remove
        </button>
      </div>
      <span className="text-md tracking-wider sm:ml-auto">{dollarAmount}</span>
    </div>
  );
};

export default CartItem;
