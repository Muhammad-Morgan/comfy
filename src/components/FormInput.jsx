const FormInput = ({ type, inputName, defaultValue, label, size }) => {
  return (
    <div>
      <label htmlFor={inputName} className="label ml-1 mb-2">
        <span className="label-text capitalize text-sm text-base-content">
          {label}
        </span>
      </label>
      <input
        type={type}
        name={inputName}
        id={inputName}
        defaultValue={defaultValue}
        className={`input ${size} text-sm input-bordered rounded-lg w-full`}
      />
    </div>
  );
};

export default FormInput;
