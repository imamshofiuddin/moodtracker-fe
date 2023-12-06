import { useEffect, useState } from "react";
import ENDPOINTS from "./endpoints";
import Cookies from 'js-cookie';
const token = Cookies.get('token');

export function MoodStats(date: any) {
  return fetch(ENDPOINTS.getMoodsYear + `/${date}`, {
    method: 'GET',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":`Bearer ${token}`,
    },
  });
}

export function MoodsCountInMonth(date: any) {
  return fetch(ENDPOINTS.amountMoodsMonth + `/${date}`, {
    method: 'GET',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":`Bearer ${token}`,
    },
  });
}


export function getMoodsInRangeSelected(date: any, range: string){
  const [moodStats, setMoodStats] = useState(null);
  const [sumMoodsData, setSumMoodsData] = useState(0);
  const explodedDate = date.split("-");
  const year = explodedDate[0];
  const month = explodedDate[1];
  let moodsInSelectedRange: any[] = [];


  useEffect(() => {
    getMoodStats();
  },[year]);

  async function getMoodStats() {
    console.log('ambil data lagi')
    let result: any = await MoodStats(date);
    result.json().then((data: any) => (setMoodStats(data['data']), setSumMoodsData(data['data'].length)));
  }

  if(range == 'monthly'){
    if(moodStats != null){
      for (let index = 0; index < sumMoodsData; index++) {
        let date: any;
        date = moodStats[index]['date'];
        date = date.split('-');
        let dateYear = date[0];
        let dateMonth = date[1];
        if(dateYear == year && dateMonth == month){
          moodsInSelectedRange[moodsInSelectedRange.length] = moodStats[index];
        }
      }
    }
  } else {
    for (let index = 0; index < sumMoodsData; index++) {
      if(moodStats != null){
        moodsInSelectedRange[moodsInSelectedRange.length] = moodStats[index];
      }
    }
  }
  return moodsInSelectedRange;
}

