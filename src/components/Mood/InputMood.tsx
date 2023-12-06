import { useState } from "react";
import { CreateMoodApi } from "../../api/crudMood";
import InputTemplate from "./InputTemplate";


function InputMood(props: any) {
  const [moodId, setMoodId] = useState<number>(1);
  const [activities, setActivities] = useState<{ [key: string]: {isChecked: boolean, image?: string | null} }>({
    Belajar: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/belajar.png'},
    Hiburan: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/hiburan.png'},
    Kerja: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/bekerja.png'},
    Olahraga: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/olahraga.png'},
    Sosial: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/sosial.png'},
    Makan: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/makan.png'},
    Memasak: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/memasak.png'},
    Berbenah: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/berbenah.png'},
    Tidur: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/tidur.png'},
    Ibadah: {isChecked: false, image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/berdoa.png'},
  });
  const [myActivities, setMyActivities] = useState<number[]>([]);
  const [description,setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMyActivities([]);
    Object.keys(activities).map((activity, index) => (
      (activities[activity].isChecked === true) ?
        (myActivities.includes(index+1) ? null : myActivities.push(index+1))
      :
        (myActivities.includes(index+1) ? setMyActivities(myActivities.filter((item) => item !== index+1)) : null)
    ));
    createMood();
  };

  function resetInput(){
    setMoodId(1);
    Object.keys(activities).map((activity) => (
      activities[activity].isChecked = false
    ))
    setDescription('');
  }

  async function createMood() {
    let items={
      'date':props.date,
      'mood_types_id':moodId,
      'activities':myActivities,
      'description':description,
    };
    let result = await CreateMoodApi(items);

    if(result.status == 200){
      resetInput();
      props.setOpenInputModal(false);
      props.setNCrudAction(props.nCrudAction + 1);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setActivities({
      ...activities,
      [name]: {isChecked: checked, image: activities[name].image},
    });
  };

  return(
      <>
      <InputTemplate
        moodId={moodId}
        activities={activities}
        description={description}
        setMoodId={setMoodId}
        handleChange={handleChange}
        setDescription={setDescription}
        handleSubmit={handleSubmit}
      />
      </>
  );
}

export default InputMood;
