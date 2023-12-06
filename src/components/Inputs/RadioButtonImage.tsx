const RadioButtonImage = ({ imageSrc, value, name, checked, onChange }: any) => {
  return (
    <label className="relative cursor-pointer">
      <input
        type="radio"
        className="sr-only"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <div className={`w-16 h-16 ${checked ? 'saturate-100' : 'saturate-0'}`}>
        <img src={imageSrc} alt="" className="lg:w-full lg:h-full md:w-16 w-11" />
      </div>
    </label>
  );
};

export default RadioButtonImage;
