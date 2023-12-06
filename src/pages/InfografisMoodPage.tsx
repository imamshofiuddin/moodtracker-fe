import MoodDonutChart from "../components/Chart/MoodDonutChart";
import MoodLineChart from "../components/Chart/MoodLineChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { format } from 'date-fns';
import ActivityStats from "../components/Statistic/Activity";
import { MouseEventHandler } from "react";
import { MoodStats } from "../api/moodStats";
import YearStatsChart from "../components/Chart/YearStatsChart";
import Dashboard from "./Dashboard";

function InfografisMoodPage(){
      return(
      <>
        <Dashboard section={InfografisSection} menuActive="Infografis"/>
      </>
      );
}//


function InfografisSection(){
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeRange, setActiveRange] = useState('monthly');
  const [moodStats, setMoodStats] = useState(null);
  const [sumMoodsData, setSumMoodsData] = useState(0);

  async function getMoodStats() {
    let result: any = await MoodStats(formatDateToString(selectedDate));
    result.json().then((data: any) => (setMoodStats(data['data']), setSumMoodsData(data['data'].length)));
  }

  useEffect(() => {
    getMoodStats();
  },[selectedDate]);

  const changeActiveRangeMonth: MouseEventHandler<HTMLButtonElement> = () => {
    setActiveRange('monthly');
  };
  const changeActiveRangeYear: MouseEventHandler<HTMLButtonElement> = () => {
    setActiveRange('annually');
  };

  const formatDateToString = (date:Date) => {
    if (date) {
      return format(date, 'yyyy-MM-dd');
    }
    return '';
  };

  return(
  <>
    <div className="flex flex-row mt-5 ml-10">
      <button  onClick={changeActiveRangeMonth} className={`${activeRange == 'monthly' ? 'bg-indigo-800 text-white' : 'text-black bg-transparent'}`}>Bulanan</button>
      <button onClick={changeActiveRangeYear} className={`${activeRange == 'annually' ? 'bg-indigo-800 text-white' : 'text-black bg-transparent'}`}>Tahunan</button>
    </div>
    {/* Chart */}
    <div className="w-full my-10">
      <div className="bg-white rounded-lg p-5 py-5 w-[95%] mx-auto">
        <div className="font-bold text-2xl text-black">Statistik</div>
        {activeRange == 'monthly' ?
        <>
        <DatePicker
          selected={selectedDate}
          dropdownMode="select"
          onChange={(date: any) => {setSelectedDate(date)}}
          dateFormat="MMMM yyyy"
          showMonthYearPicker
          minDate={new Date(Date.parse('1970-01-01'))}
          maxDate={new Date()}
          className="rounded-md bg-gray-300 text-gray-700 cursor-pointer border-0 my-2"
        />
        <div className="">
          <MoodLineChart date={formatDateToString(selectedDate)} range={activeRange} moodStats={moodStats} sumMoodsData={sumMoodsData}/>
        </div>
        </>
        :
        <>
          <DatePicker
          selected={selectedDate}
          onChange={(date:any) => {setSelectedDate(date), getMoodStats()}}
          showYearPicker
          minDate={new Date(Date.parse('1970-01-01'))}
          maxDate={new Date()}
          dateFormat="yyyy"
          className="rounded-md bg-gray-300 text-gray-700 cursor-pointer border-0 my-2 mb-4"
          />
          <YearStatsChart date={formatDateToString(selectedDate)} range={activeRange}/>
        </>
      }
      </div>
    </div>
    <div className="w-full my-10">
      <div className="flex flex-col lg:flex-row w-[95%] md:space-x-3 space-y-3 md:space-y-0 mx-auto">
        <div className="bg-white rounded-lg p-5 py-5 w-full ">
          <div className="font-bold text-2xl text-black">Ringkasan Mood</div>
            <div className="my-5 flex place-content-center">
              <MoodDonutChart date={formatDateToString(selectedDate)} range={activeRange} className="md:w-96 w-56"/><br /><br />
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 py-5 w-full h-[50%]">
            <div className="font-bold text-2xl mb-10 text-black">Ringkasan Aktifitas</div>
            <ActivityStats date={formatDateToString(selectedDate)} range={activeRange}/>
          </div>
      </div>
    </div>
  </>
  );
}


export default InfografisMoodPage;
