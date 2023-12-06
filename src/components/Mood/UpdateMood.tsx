import { useEffect, useState } from "react";
import { UpdateMoodApi } from "../../api/crudMood";
import InputTemplate from "./InputTemplate";

function UpdateMood(props: any) {
  const [moodId, setMoodId] = useState<number>(props.data['mood_type_id']);
  const [activities, setActivities] = useState<{ [key: string]: {isChecked: boolean, image?: string | null} }>({
    Belajar: {
      isChecked: props.data['activity_id'].includes(1),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/belajar.png'
    },
    Hiburan: {
      isChecked: props.data['activity_id'].includes(2),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/hiburan.png'
    },
    Kerja: {
      isChecked: props.data['activity_id'].includes(3),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/bekerja.png'
    },
    Olahraga: {
      isChecked: props.data['activity_id'].includes(4),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/olahraga.png'
    },
    Sosial: {
      isChecked: props.data['activity_id'].includes(5),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/sosial.png'
    },
    Makan: {
      isChecked: props.data['activity_id'].includes(6),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/makan.png'
    },
    Memasak: {
      isChecked: props.data['activity_id'].includes(7),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/memasak.png'
    },
    Berbenah: {
      isChecked: props.data['activity_id'].includes(8),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/berbenah.png'
    },
    Tidur: {
      isChecked: props.data['activity_id'].includes(9),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/tidur.png'
    },
    Ibadah: {
      isChecked: props.data['activity_id'].includes(10),
      image: 'https://staging-api-health2023.agileteknik.com/images/act_icon/berdoa.png'
    },
  });
  const [description,setDescription] = useState(props.data['description']);

  useEffect(()=>{
    setMoodId(props.data['mood_type_id']);
    Object.keys(activities).map((activity, index) => (
      activities[activity].isChecked = props.data['activity_id'].includes(index+1)
    ))
    setDescription(props.data['description']);
  }, [props.data]);

  const [myActivities, setMyActivities] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMyActivities([]);
    Object.keys(activities).map((activity, index) => (
      (activities[activity].isChecked === true) ?
        (myActivities.includes(index+1) ? null : myActivities.push(index+1))
      :
        (myActivities.includes(index+1) ? setMyActivities(myActivities.filter((item) => item !== index+1)) : null)
    ));
    updateMood();
  };

  async function updateMood() {
    let items={
      'date':props.date,
      'mood_types_id':moodId,
      'activities':myActivities,
      'description':description,
    };
    let result = await UpdateMoodApi(props.date, items);

    if(result.status == 200){
      props.setOpenUpdateModal(false);
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

export default UpdateMood;
