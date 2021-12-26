const CostumInput = ({
  onInputChangeCallBack,
  value,
  name,
  type,
  label,
  id,
}) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onInputChangeCallBack}
      />
      <label htmlFor={name}>{label} </label>
    </div>
  );
};

export default CostumInput;
