import 'chart.js/auto';
import { Doughnut } from "react-chartjs-2";
import MoodBahagia from '../../assets/img/mood-bahagia.png';
import MoodSenyum from '../../assets/img/mood-senyum.png';
import MoodBiasa from '../../assets/img/mood-biasa.png';
import MoodKecewa from '../../assets/img/mood-kecewa.png';
import MoodSedih from '../../assets/img/mood-sedih.png';
import { getMoodsInRangeSelected } from '../../api/moodStats';


export default function MoodDonutChart(props: any) {

  const labels = ["Sangat Senang", "Senang", "Biasa", "Sedih", "Sangat Sedih"];
  let moodAmountArray = [0,0,0,0,0];
  let moodCount = 0;

  let moodsInSelectedRange = getMoodsInRangeSelected(props.date, props.range);
  for (let index = 0; index < moodsInSelectedRange.length; index++) {
    if(moodsInSelectedRange != null){
      switch (moodsInSelectedRange[index]['mood_type_id']) {
        case 1:
          moodAmountArray[0]++;
          break;
        case 2:
          moodAmountArray[1]++;
          break;
        case 3:
          moodAmountArray[2]++;
          break;
        case 4:
          moodAmountArray[3]++;
          break;
        case 5:
          moodAmountArray[4]++;
          break;
        default:
          break;
      }
    }
  }

  for (let index = 0; index < moodAmountArray.length; index++) {
    moodCount += moodAmountArray[index];
  }

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Jumlah",
        backgroundColor: ["#43A866","#A8BF18","#F4BD1C","#F18D25","#EE1830"],
        data: moodAmountArray,
        cutout: '70%',
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  return(
  <>
    <div className='w-96'>
      <Doughnut data={data} />
      <div className='font-bold w-full text-center mt-[-100px] mb-[50px] text-4xl text-black'>{moodCount}</div>
      <div className="flex flex-row place-content-center space-x-5">
        <div className="flex flex-col space-y-3">
          <img src={MoodBahagia} className="w-10 h-10" />
          <div className='w-10 h-5 rounded-md bg-[#43A866] text-center text-white'>{moodAmountArray[0]}</div>
        </div>
        <div className="flex flex-col space-y-3">
          <img src={MoodSenyum} className="w-10 h-10" />
          <div className='w-10 h-5 rounded-md bg-[#A8BF18] text-center text-white'>{moodAmountArray[1]}</div>
        </div>
        <div className="flex flex-col space-y-3">
          <img src={MoodBiasa} className="w-10 h-10" />
          <div className='w-10 h-5 rounded-md bg-[#F4BD1C] text-center text-white'>{moodAmountArray[2]}</div>
        </div>
        <div className="flex flex-col space-y-3">
          <img src={MoodKecewa} className="w-10 h-10" />
          <div className='w-10 h-5 rounded-md bg-[#F18D25] text-center text-white'>{moodAmountArray[3]}</div>
        </div>
        <div className="flex flex-col space-y-3">
          <img src={MoodSedih} className="w-10 h-10" />
          <div className='w-10 h-5 rounded-md bg-[#EE1830] text-center text-white'>{moodAmountArray[4]}</div>
        </div>
      </div>
    </div>
  </>
  );
}
