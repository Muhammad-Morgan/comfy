import { useState } from "react";
const RangeInput = ({ label, name, size,value }) => {
  const step = 1000;
  const maxPrice = 100000;
  const [price, setPrice] = useState(value || maxPrice);
  return (
    <div>
      <label className="ml-1 mb-2 flex justify-between">
        <span className="label-text text-sm capitalize text-base-content">
          {label}
        </span>
        <span className="label-text text-sm capitalize text-base-content">
          ${(price / 100).toFixed(2)}
        </span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        step={step}
        className={`range range-sm range-primary my-2 self-start ${size}`}
      />
      <div className="flex justify-between">
        <span className="label-text text-xs capitalize font-bold text-base-content">
          0
        </span>
        <span className="label-text text-xs capitalize font-bold text-base-content">
          max : ${(maxPrice / 100).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default RangeInput;
