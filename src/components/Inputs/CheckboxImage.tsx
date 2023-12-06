const CheckboxImage = ({ name,imageSrc, checked, onChange }: any) => {
  return (
    <div className="flex place-content-center">
    <label className="relative cursor-pointer">
      <input
        name={name}
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
      />
      <div className={`w-16 h-16 ${checked ? 'saturate-100' : 'saturate-0'} flex items-center place-content-center`}>
        <img src={imageSrc} alt="" className="lg:w-12 md:w-10 w-8" />
      </div>
    </label>
    </div>
  );
};

export default CheckboxImage;
