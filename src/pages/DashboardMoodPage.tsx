import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import CircleGrays from '../assets/img/circle-gray.png';
import { format } from 'date-fns';
import Dashboard from './Dashboard';
import styled from 'styled-components';
import { BulkMoodPerMonth } from '../api/crudMood';
import { BiMessageSquareEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
import { GetActivities } from '../api/activity';
import Modal from '../components/Modal';
import InputMood from '../components/Mood/InputMood';
import DeleteMood from '../components/Mood/DeleteMood';
import UpdateMood from '../components/Mood/UpdateMood';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonLoader() {
  return (
    <div>
      <Skeleton height={100} className='w-full' />
    </div>
  );
}

function DashboardMoodPage(){
  return(
    <>
    <Dashboard section={DashboardMoodSection} menuActive="My Mood"/>
    </>
  );
}

function DashboardMoodSection(){
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarText, setCalendarText] = useState(`${format(new Date(),'dd-MM-yyyy')}`);
  const [calendarView, setCalendarView] = useState('month');
  const [disableMonth, setDisableMonth] = useState(false);
  const [dataMoods, setDataMoods] = useState(null);
  const [dataActivities, setDataActivities] = useState(null);
  const [nDataMoods, setNDataMoods] = useState(0);
  const [nDataActivities, setNDataActivities] = useState(0);
  const [selectedMonthYear, setSelectedMonthYear] = useState(format(new Date(), 'yyyy-MM'));
  const [openInputModal, setOpenInputModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let [nCrudAction, setNCrudAction] = useState<number>(0);

  const handleDateChange = (value:any) => {
    setSelectedDate(value);
    setCalendarText(`${format(value,'dd-MM-yyyy')}`);
  };

  const handleYearChange = (value:any) => {
    setCalendarText(`${format(value,'dd-MM-yyyy')}`);
  };

  const handleMonthChange = (value:any) => {
    setCalendarText(`${format(value,'dd-MM-yyyy')}`);
  };

  const handleViewChange = (value:any) => {
      setIsLoading(true);
      setSelectedDate(value);
      setSelectedMonthYear(format(value, 'yyyy-MM'));
      setCalendarText(`${format(value,'dd-MM-yyyy')}`);
  };

  function Icon(props: any){
    return(
      <>
        <div className="flex items-center place-content-center mt-2">
          <img src={props.src} className='w-8 h-8'/>
        </div>
      </>
    );
  }

  function CircleGray(){
    return(
      <>
      <div className="flex items-center place-content-center mt-2">
        <img src={CircleGrays} className='w-8 h-8'/>
      </div>
      </>
    );
  }

  const setTileContent = (date: any, view: any) => {
    setCalendarView(view);
    if(dataMoods != null && view === 'month'){
      for (let index = 0; index < nDataMoods; index++) {
        if(dataMoods[index]['date'] == format(date, 'yyyy-MM-dd')){
          return <Icon src={dataMoods[index]['mood_type_icon']}/>
        }
      }
    }

    if(view !== 'month'){
      return null;
    }

    return (<CircleGray/>);
  };

  const getMoodIconInSelectedDate = (date: string) => {
    for (let index = 0; index < nDataMoods; index++) {
      if(dataMoods != null){
        if(date == dataMoods[index]['date']){
          return dataMoods[index]['mood_type_icon'];
        }
      }
    }
  }

  const getDataMoodInSelectedDate = (date: string) => {
    for (let index = 0; index < nDataMoods; index++) {
      if(dataMoods != null){
        if(date == dataMoods[index]['date']){
          return dataMoods[index];
        }
      }
    }
  }

  const getDescriptionInSelectedDate = (date: string) => {
    for (let index = 0; index < nDataMoods; index++) {
      if(dataMoods != null){
        if(date == dataMoods[index]['date']){
          return dataMoods[index]['description'];
        }
      }
    }
  }

  const getActivitiesInSelectedDate = (date: string) => {
    const items = [];
    for (let index = 0; index < nDataMoods; index++) {
      if((dataMoods != null) && (date == dataMoods[index]['date'])){
        const activity_id: any[] = dataMoods[index]['activity_id'];
        for (let i = 0; i < activity_id.length; i++) {
          for (let j = 0; j < nDataActivities; j++) {
            if((dataActivities != null) && (activity_id[i] == dataActivities[j]['id'])){
              items.push(
                <>
                  <div className="flex flex-col items-center place-content-center">
                    <img key={i} src={dataActivities[j]['icon_path']} width={40} alt="" />
                    <div className='text-xs'>{dataActivities[j]['name']}</div>
                  </div>
                </>
              );
            }
          }
        }
      }
    }
    if(items.length == 0){
      items.push(<p>Tidak ada aktifitas</p>)
    }
    return(
    <>
    <div className="grid grid-cols-4 gap-3 xl:grid-cols-3">
      {items}
    </div>
    </>
    );
  }

  const hasMoodInDate = (date: string) => {
    for (let index = 0; index < nDataMoods; index++) {
      if(dataMoods != null){
        if(date == dataMoods[index]['date']){
          return true;
        }
      }
    }
    return false;
  }

  const tileDisabled = ({ activeStartDate, date, view }: any) => {
    const today = new Date();

    if (view === 'month') {
      if(activeStartDate > today){
        setDisableMonth(true);
      } else {
        setDisableMonth(false);
      }
      return (date.getMonth() !== activeStartDate.getMonth()) || (date > today);
    }
    return false;
  };

  async function bulkMoodPerMonth() {
    setIsLoading(true);
    let result: any = await BulkMoodPerMonth(format(selectedDate, 'yyyy-MM-dd'));
    result.json().then((data: any) => (setDataMoods(data['data']), setNDataMoods(data['data'].length)));
    if(result.status == 200){
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  }

  async function getActivities() {
    let result: any = await GetActivities();
    result.json().then((data: any) => (setDataActivities(data['data']), setNDataActivities(data['data'].length)));
  }

  useEffect(() => {
    bulkMoodPerMonth();
  },[selectedMonthYear]);

  useEffect(() => {
    bulkMoodPerMonth();
  },[nCrudAction]);

  useEffect(() => {
    getActivities();
  },[]);

  return(
    <>
    <div className="m-7 my-1">
      <div className="my-12">
        <div className="flex xl:flex-row flex-col xl:space-x-2 xl:space-y-0 space-x-0 space-y-5">
          <CalendarContainer className='xl:w-[65%] w-full -z-1 text-black'>
            <Calendar
              minDate={new Date(Date.parse('1970-01-01'))}
              maxDate={new Date()}
              onClickMonth={handleMonthChange}
              onClickYear={handleYearChange}
              onChange={handleDateChange}
              onActiveStartDateChange={({ activeStartDate }) => (handleViewChange(activeStartDate))}
              value={selectedDate}
              tileDisabled={({activeStartDate, date, view}) => tileDisabled({activeStartDate, date, view})}
              tileContent={({ date, view }) => setTileContent(date, view)}
            />
          </CalendarContainer>
            {(calendarView === 'month' && !disableMonth) ?
              <div className='bg-white p-10 rounded-[20px] text-black xl:w-80 w-full'>
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                (hasMoodInDate(format(selectedDate, 'yyyy-MM-dd'))) ?
                <>
                    <div className="grid grid-cols-2 gap-30">
                      <div className='flex items-center'>
                        <p>{calendarText}</p>
                      </div>
                      <div className='flex flex-row items-center place-content-end space-x-5'>
                        <BiMessageSquareEdit size={30} onClick={()=>setOpenUpdateModal(true)} className="cursor-pointer text-indigo-700"/>
                        <MdOutlineDelete size={30} onClick={()=>setOpenDeleteModal(true)} className="cursor-pointer text-red-600"/>
                      </div>
                    </div>
                    <div className='mt-5'>
                      <img src={getMoodIconInSelectedDate(format(selectedDate, 'yyyy-MM-dd'))} width={50} alt="" />
                      <div className='font-bold text-lg mt-5'>Aktifitas</div>
                      <div className='my-5'>{getActivitiesInSelectedDate(format(selectedDate, 'yyyy-MM-dd'))}</div>
                      <div className='font-bold text-lg mb-5'>Deskripsi</div>
                      <div className='w-full overflow-auto whitespace-pre-line'>{getDescriptionInSelectedDate(format(selectedDate, 'yyyy-MM-dd'))}</div>
                    </div>
                </>
              :
                <>
                  <div className='text-center'><p>{calendarText}</p></div>
                  <div className="mt-10">
                    <p className='text-center'>Kamu belum input mood di tanggal ini</p>
                    <button onClick={()=>setOpenInputModal(true)} className="bg-indigo-800 text-white mt-3 w-full">Input Mood</button>
                  </div>
                </>
              )}
              </div>
            : null}

        </div>
      </div>
    </div>
    <Modal open={openInputModal} onClose={() => setOpenInputModal(false)}>
      <InputMood date={format(selectedDate, 'yyyy-MM-dd')} setOpenInputModal={setOpenInputModal} nCrudAction={nCrudAction} setNCrudAction={setNCrudAction}/>
    </Modal>
      {(getMoodIconInSelectedDate(format(selectedDate, 'yyyy-MM-dd')) != undefined) ?
      <Modal open={openUpdateModal} onClose={() => setOpenUpdateModal(false)}>
        <UpdateMood date={format(selectedDate, 'yyyy-MM-dd')} data={getDataMoodInSelectedDate(format(selectedDate, 'yyyy-MM-dd'))} setOpenUpdateModal={setOpenUpdateModal} nCrudAction={nCrudAction} setNCrudAction={setNCrudAction}/>
      </Modal>
      :
        null
      }
    <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
      <DeleteMood date={format(selectedDate, 'yyyy-MM-dd')} setOpenDeleteModal={setOpenDeleteModal} nCrudAction={nCrudAction} setNCrudAction={setNCrudAction}/>
    </Modal>
    </>
  );
}

export default DashboardMoodPage;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  font-family: Nunito, Helvetica, sans-serif;
  margin: auto;
  background-color: white;
  padding: 5px;
  border-radius: 20px;
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
      background-color: white;
      color: black;
      font-size: 1.5rem;
      border-radius: 0px;
      margin-bottom: 20px;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
      font-size: 2rem;
      padding: 10px;
      background-color: white;
      color: black;
      border-radius: 0px;
      margin-bottom: 20px;
    }
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
  }
  button {
    padding: 12px 0;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
  .react-calendar__tile--range {
    box-shadow: 0 0 2px 1px gray;
  }
  .react-calendar__tile--now {
    background-color: #FFFFC2;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1em;
  }
  .react-calendar__tile:disabled {
    opacity: 0.2;
  }
`;

