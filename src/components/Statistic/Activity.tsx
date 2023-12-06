import Belajar from '../../assets/img/belajar.png';
import Bekerja from '../../assets/img/bekerja.png';
import Olahraga from '../../assets/img/olahraga.png';
import Hiburan from '../../assets/img/hiburan.png';
import Sosial from '../../assets/img/sosial.png';
import Makan from '../../assets/img/makan.png';
import Memasak from '../../assets/img/memasak.png';
import Berbenah from '../../assets/img/berbenah.png';
import Tidur from '../../assets/img/tidur.png';
import Ibadah from '../../assets/img/berdoa.png';
import { getMoodsInRangeSelected } from '../../api/moodStats';

function ActivityStats(props: any) {
  let getMoodsInSelectedMonth = getMoodsInRangeSelected(props.date, props.range);

  let activitiesCount = {
    belajar: 0,
    bekerja: 0,
    olahraga: 0,
    hiburan: 0,
    sosial: 0,
    makan: 0,
    memasak: 0,
    berbenah: 0,
    tidur: 0,
    ibadah: 0,
  }

  for (let index = 0; index < getMoodsInSelectedMonth.length; index++) {
    if(getMoodsInSelectedMonth != null){
      for (let index2 = 0; index2 < getMoodsInSelectedMonth[index]['activity_id'].length; index2++) {
        switch (getMoodsInSelectedMonth[index]['activity_id'][index2]) {
          case 1:
            activitiesCount.belajar++;
            break;
          case 2:
            activitiesCount.hiburan++;
            break;
          case 3:
            activitiesCount.bekerja++;
            break;
          case 4:
            activitiesCount.olahraga++;
            break;
          case 5:
            activitiesCount.sosial++;
            break;
          case 6:
            activitiesCount.makan++;
            break;
          case 7:
            activitiesCount.memasak++;
            break;
          case 8:
            activitiesCount.berbenah++;
            break;
          case 9:
            activitiesCount.tidur++;
            break;
          case 10:
            activitiesCount.ibadah++;
            break;
          default:
            break;
        }
      }
    }
  }


  return(
    <>
    <div className="grid grid-cols-5 place-content-center gap-y-7">
      <div className="flex flex-col space-y-3 w-50 text-black text-center">
        <img src={Belajar} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.belajar}</div>
        <small>{Object.keys(activitiesCount)[0]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Hiburan} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.hiburan}</div>
        <small>{Object.keys(activitiesCount)[3]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Bekerja} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.bekerja}</div>
        <small>{Object.keys(activitiesCount)[1]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Olahraga} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.olahraga}</div>
        <small>{Object.keys(activitiesCount)[2]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Sosial} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.sosial}</div>
        <small>{Object.keys(activitiesCount)[4]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Makan} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.makan}</div>
        <small>{Object.keys(activitiesCount)[5]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Memasak} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.memasak}</div>
        <small>{Object.keys(activitiesCount)[6]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Berbenah} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.berbenah}</div>
        <small>{Object.keys(activitiesCount)[7]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Tidur} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.tidur}</div>
        <small>{Object.keys(activitiesCount)[8]}</small>
      </div>
      <div className="flex flex-col space-y-3 text-black text-center">
        <img src={Ibadah} className="w-11 h-11 mx-auto" />
        <div className='w-10 h-5 rounded-md bg-indigo-900 text-center text-white mx-auto'>{activitiesCount.ibadah}</div>
        <small>{Object.keys(activitiesCount)[9]}</small>
      </div>
    </div>
    </>
  );
}

export default ActivityStats;
