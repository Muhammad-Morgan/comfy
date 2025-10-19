const SelectInput = ({ name, label, list, size, defaultValue }) => {
  return (
    <div>
      <label htmlFor={name} className="label ml-1 mb-2">
        <span className="label-text capitalize text-sm text-base-content">
          {label}
        </span>
      </label>
      <select
        name={name}
        id={name}
        defaultValue={defaultValue}
        className={`select ${size} cursor-pointer w-full`}
      >
        {list.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectInput;
