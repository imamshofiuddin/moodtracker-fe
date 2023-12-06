import RadioButtonImage from "../Inputs/RadioButtonImage";
import CheckboxImage from "../Inputs/CheckboxImage";

function InputTemplate(props: any) {
  const moodIcons = [
    {id: 1, image: "https://staging-api-health2023.agileteknik.com/images/mood_icon/senang-v2.png"},
    {id: 2, image: "https://staging-api-health2023.agileteknik.com/images/mood_icon/senyum-v2.png"},
    {id: 3, image: "https://staging-api-health2023.agileteknik.com/images/mood_icon/biasa-v2.png"},
    {id: 4, image: "https://staging-api-health2023.agileteknik.com/images/mood_icon/kecewa-v2.png"},
    {id: 5, image: "https://staging-api-health2023.agileteknik.com/images/mood_icon/sedih-v2.png"}
  ];

  return(
  <>
    <div className="">
      <div className="font-bold text-xl text-[#1F115E] text-center mb-4">{props.date}</div>
      <form onSubmit={props.handleSubmit}>
      <div className="grid md:grid-cols-2 md:gap-20 gap-10 mb-5">
        <div>
          <div className="shadow px-8 py-5 rounded-md">
          <div className="text-[#1F115E] font-extrabold text-2xl text-center mb-4">Bagaimana hari Anda ?</div>
            <div className="flex flex-row md:space-x-2">
            {moodIcons.map((value) => (
              <RadioButtonImage
                key={value.id}
                imageSrc={value.image}
                value={value.id.toString()}
                name="mood_id"
                checked={props.moodId === value.id}
                onChange={(e: any) => props.setMoodId(parseInt(e.target.value))}
              />
            ))}
          </div>
        </div>
        <br/>
        <div className="mb-5">
          <div className="text-center text-[#1F115E] font-extrabold text-2xl">Kegiatan</div>
          <div className="text-center text-[#1F115E] text-lg">Pilih semua kegiatan yang kamu lakukan hari ini</div>
        </div>
        <div className="grid grid-cols-5 md:space-x-2">
          {Object.keys(props.activities).map((activity) => (
            <label key={activity} className="text-center text-black">
              <CheckboxImage
                name={activity}
                imageSrc={props.activities[activity].image}
                checked={props.activities[activity].isChecked}
                onChange={props.handleChange}
              />
              {activity}
            </label>
          ))}
        </div>
        </div>
        <div>
          <div className="mb-5">
            <div className="mb-5">
              <div className="text-center text-[#1F115E] font-extrabold text-2xl">Deskripsi</div>
              <div className="text-center text-[#1F115E] text-lg">Tambahkan deskripsi tentang bagaimana harimu</div>
            </div>
            <div className="flex">
              <textarea name="" id="" maxLength={300} onChange={(e) => (props.setDescription(e.target.value))} className="mx-auto md:w-full w-80 h-10 border-2 focus:ring-0 focus:border-[#7E57C2] rounded-lg text-black" value={props.description} required></textarea>
            </div>
            <div className="text-end">
              <small className="text-black">maksimal 300 karakter</small>
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="flex">
        <button type="submit" className="bg-indigo-800 text-white md:w-full w-80 mx-auto">Submit</button>
      </div>
      </form>
    </div>
  </>
  )
}

export default InputTemplate
