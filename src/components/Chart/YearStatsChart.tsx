import { getMoodsInRangeSelected } from "../../api/moodStats";

function pixelBuilder(nDay: number, colorPixel: any){
  const items = [];
  for (let i = 0; i < nDay; i++) {
    items.push(
    <>
      <div key={i} className={`bg-[${colorPixel[i]}] text-xs w-6 h-6 p-1 mx-1 rounded-full text-center items-center`}>{i+1}</div>
    </>
    );
  }
  return(
  <>
  <div className="flex flex-row">
    {items}
  </div>
  </>
  )
}

function ListMonths(props: any) {
  let colorPixel: any[] = [];
  let imonth = props.month

  for (let index = 0; index < props.nDay; index++) {
    colorPixel[index] = "#f0f0f0";
    for (let index2 = 0; index2 < props.dataMood.length; index2++) {
      let date: any;
      date = props.dataMood[index2]['date'];
      date = date.split('-');
      let month = date[1];
      let day = date[2];
      if( parseInt(month) == imonth && parseInt(day) == index+1){
        switch(props.dataMood[index2]['mood_type_id']){
          case 1:
            colorPixel[index] = "#43A866";
            break;
          case 2:
            colorPixel[index] = "#A8BF18";
            break;
          case 3:
            colorPixel[index] = "#F4BD1C";
            break;
          case 4:
            colorPixel[index] = "#F18D25";
            break;
          case 5:
            colorPixel[index] = "#EE1830";
            break;
          default:
            break;
        }
      }
    }
  }

  switch(props.month){
    case 1:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 2:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 3:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 4:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 5:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 6:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 7:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 8:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 9:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 10:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 11:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
    case 12:
      return <><div className="flex flex-row"><div>{pixelBuilder(props.nDay, colorPixel)}</div></div></>
  }
}

function YearStatsChart(props: any){
  let moodsInSelectedYear = getMoodsInRangeSelected(props.date, props.range);
  let index_helper = 1;
  const explodedDate = props.date.split("-");
  const year = explodedDate[0];
  const daysInMonths : any[] = [];

  for (let index = 0; index < 12; index++) {
    const month = index + 1;
    daysInMonths[index] = getDaysInMonth(parseInt(year), month);
  }

  return(
    <>
    <div className="flex flex-row text-black">
      <div className="">
        <div className="mr-2 w-10">Jan</div>
        <div className="mr-2 w-10">Feb</div>
        <div className="mr-2 w-10">Mar</div>
        <div className="mr-2 w-10">Apr</div>
        <div className="mr-2 w-10">May</div>
        <div className="mr-2 w-10">Jun</div>
        <div className="mr-2 w-10">Jul</div>
        <div className="mr-2 w-10">Aug</div>
        <div className="mr-2 w-10">Sep</div>
        <div className="mr-2 w-10">Oct</div>
        <div className="mr-2 w-10">Nov</div>
        <div className="mr-2 w-10">Dec</div>
      </div>
      <div className="w-full overflow-scroll ">
        {daysInMonths.map((item) => (
          <ListMonths month={index_helper++} nDay={item} dataMood={moodsInSelectedYear}/>
        ))}
      </div>
    </div>
    </>
  );
}

function getDaysInMonth(year: number, month: number) {
  const date = new Date(year, month-1, 1);

  date.setMonth(date.getMonth() + 1);
  date.setDate(date.getDate() - 1);

  const lastDayOfMonth = date.getDate();

  return lastDayOfMonth;
};

export default YearStatsChart
