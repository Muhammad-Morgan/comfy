const CheckboxInput = ({ label, name, size, shippingValue }) => {
  return (
    <div className="grid justify-center w-full">
      <label htmlFor={name} className="label mb-2 mt-auto">
        <span className="label-text capitalize text-sm text-base-content">
          {label}
        </span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={shippingValue}
        className={`checkbox checkbox-primary mx-auto ${size}`}
      />
    </div>
  );
};

export default CheckboxInput;
