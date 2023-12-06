import { Line } from "react-chartjs-2";
import 'font-awesome/css/font-awesome.min.css';
import { getMoodsInRangeSelected } from '../../api/moodStats';
import { useMediaQuery } from 'react-responsive'

const MyChart = (props: any) => {
  const explodedDate = props.date.split("-");
  const year = explodedDate[0];
  const month = explodedDate[1];
  const daysInMonth = getDaysInMonth(parseInt(year), parseInt(month));

  let moodsInSelectedMonth = getMoodsInRangeSelected(props.date, props.range);
  let xValue = [];
  let dayCount = daysInMonth;
  let dataMoodsInChart: any[] = [];
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 993px)'
  })
  const isMediumBreakpoint = useMediaQuery({query: '(max-width: 768px)'})
  const isLargeBreakpoint = useMediaQuery({ minWidth: 768, maxWidth: 991 });

  for (let index = 0; index < daysInMonth; index++) {
    if(moodsInSelectedMonth.length == 0){
      dataMoodsInChart[index] = 6;
    } else {
      for (let index2 = 0; index2 < moodsInSelectedMonth.length; index2++) {
        let date: any;
        date = moodsInSelectedMonth[index2]['date'];
        date = date.split('-');
        let day = date[2];
        if(day == index+1){
          dataMoodsInChart[index] = moodsInSelectedMonth[index2]['mood_type_id'];
          break;
        } else {
          dataMoodsInChart[index] = 6;
        }
      }
    }
  }

  for (let index = 0; index < dayCount; index++) {
    xValue[index] = index + 1;
  }
  // Initial data
  const chartData = {
    labels: xValue,
    datasets: [
      {
        label: 'Data',
        data: dataMoodsInChart,
        backgroundColor: 'gray',
        pointBackgroundColor: (context: any) => {
          const value = context.dataset.data[context.dataIndex];
          // Define your logic to determine the background color based on 'value'
          // For example, you can use a threshold to change colors:
          switch(value){
            case 1:
              return "#43A866";
            case 2:
              return "#A8BF18";
            case 3:
              return "#F4BD1C";
            case 4:
              return "#F18D25";
            case 5:
              return "#EE1830";
            case 6:
              return 'gray';
          }
          return value > 3 ? 'green' : 'red';
        },
      },
    ],
  };


  const yTickCallback = (value: any) => {

    switch (value) {
      case 6:
        return "Mood kosong";
      case 1:
        return "Sangat Senang";
      case 2:
        return "Senang";
      case 3:
        return "Biasa";
      case 4:
        return "Sedih";
      case 5:
        return "Sangat Sedih";
      default:
        return value;
    }
  };

  const options: any = {
    responsive: true,
    layout: {
      padding: {
        left: 30,
        right: 30,
        top: 10,
        bottom: 10,
      },
    },
    scales: {
      y: {
        min: 1,
        max: 6,
        reverse: true,
        beginAtZero: true,
        title: {
          display: false,
          text: 'Custom Y-axis Label',
        },
        ticks: {
          stepSize: 1,
          fontfamily: 'FontAwesome',
          callback: yTickCallback,
        },
      },
    },
  };

  return (
    <>
    {isDesktopOrLaptop && <Line data={chartData} options={options} width={300} height={80} />}
    {isLargeBreakpoint && <Line data={chartData} options={options} width={300} height={150} />}
    {isMediumBreakpoint && <Line data={chartData} options={options} width={300} height={200} />}
    </>
  );
};

function getDaysInMonth(year: number, month: number) {
  const date = new Date(year, month-1, 1);

  date.setMonth(date.getMonth() + 1);
  date.setDate(date.getDate() - 1);

  const lastDayOfMonth = date.getDate();

  return lastDayOfMonth;
};

export default MyChart;
