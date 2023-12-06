import MockupFiturInput from '../../assets/img/fitur-1.png';
import MockupFiturCalendar from '../../assets/img/fitur-2.png';
import MockupFiturStats from '../../assets/img/fitur-3.png';

function Features(){
  return(
    <>
    <div className="items-center grid grid-flow-row place-items-center gap-10 mb-24 md:mt-24 mt-12" id='features'>
      <div className="bg-[#EFECFF] px-2 py-4 md:w-[165px] md:h-[75px] w-40 h-16 rounded-full flex items-center">
        <p className="font-bold text-[#5236FF] md:text-lg text-md text-center mx-auto">Fitur</p>
      </div>
      <h1 className='font-extrabold text-center my-8 md:text-4xl text-2xl text-black px-5'>Powerful features to boost <br /> your mental health</h1>
      <div className="grid xl:grid-cols-3 gap-10">
        <div className="grid grid-flow-row">
          <div className="flex justify-center w-full">
            <div className="content-center bg-gradient-to-b from-[#5E43FF] to-[#B570FD] rounded-[95px] overflow-hidden md:w-96 md:h-96 w-64 h-64 p-10 flex justify-center items-center">
              <img src={MockupFiturInput} className='w-[160px] lg:w-[230px] mb-[-200px] md:w-[180px]' alt="" />
            </div>
          </div>
          <div className="my-5 items-start w-full">
            <p className='text-3xl font-bold text-[#3A3B7E] text-center mt-3'>Pencatatan Mood Harian</p>
            <p className='text-lg text-[#797979] text-center md:w-96 p-5 whitespace-pre-line'>Halaman catat mood harian  pengguna dapat melakukan pencatatan emosinya dengan mengisi input formulir pencatatan berupa tipe emosi yang dirasakan, deskripsi dan kegiatan</p>
          </div>
        </div>
        <div className="grid grid-flow-row">
          <div className="flex justify-center w-full">
            <div className="content-center bg-gradient-to-b from-[#5E43FF] to-[#B570FD] rounded-[95px] overflow-hidden md:w-96 md:h-96 w-64 h-64 p-10 flex justify-center items-center">
              <img src={MockupFiturCalendar} className='w-[160px] lg:w-[230px] mb-[-200px] md:w-[180px]' alt="" />
            </div>
          </div>
          <div className="my-5 items-start  w-full">
            <p className='text-3xl font-bold text-[#3A3B7E] text-center mt-3'>Kalender Mood</p>
            <p className='text-lg text-[#797979] text-center md:w-96 p-5'>Fitur kalender yang memungkinkan pengguna untuk melacak suasana hati </p>
          </div>
        </div>
        <div className="grid grid-flow-row justify-between">
          <div className="flex justify-center w-full">
            <div className="content-center bg-gradient-to-b from-[#5E43FF] to-[#B570FD] rounded-[95px] overflow-hidden md:w-96 md:h-96 w-64 h-64 p-10 flex justify-center">
              <img src={MockupFiturStats} className='w-[160px] lg:w-[230px] mb-[-200px] md:w-[180px]' alt="" />
            </div>
          </div>
          <div className="my-5 items-start w-full">
            <p className='text-3xl font-bold text-[#3A3B7E] text-center mt-3'>Statistik Mood</p>
            <p className='text-lg text-[#797979] text-center md:w-96 p-5'>Halaman statistik user terdapat grafik suasana hati berupa diagram garis yang dapat dilihat perbulan atau pertahun, ringkasan suasana hati dan ringkasan kegiatan pengguna</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Features
