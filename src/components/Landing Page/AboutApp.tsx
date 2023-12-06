import AppLogo from '../../assets/img/mood-tracker-logo.png'
function AboutApp(){
  return(
    <>
    <div className="items-center grid grid-flow-row place-items-center gap-10 mb-40 md:mt-24 mt-12">
      <div className="bg-[#EFECFF] px-2 py-4 md:w-[165px] md:h-[75px] w-40 h-16 rounded-full flex items-center">
          <p className="font-bold text-[#5236FF] md:text-lg text-md text-center mx-auto">Tentang</p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center md:mx-20 overflow-hidden">
        <div className="bg-white shadow lg:p-20 p-10 lg:h-96 rounded-2xl w-[70%]">
          <div className="lg:w-[80%] space-y-5">
            <div className="text-black text-3xl text-center lg:text-left font-bold">Tentang Aplikasi</div>
            <div className="text-[#797979] text-center lg:text-left">MoodTracker adalah aplikasi mobile yang dirancang untuk membantu pengguna memantau dan mengelola kesejahteraan emosional mereka secara efektif. Dikembangkan dengan pendekatan yang berorientasi pada pengguna, aplikasi ini memberdayakan individu untuk melacak mood mereka, mengidentifikasi pola, dan mengadopsi kebiasaan lebih seimbang untuk kehidupan yang lebih memuaskan.</div>
          </div>
        </div>
        <div className='lg:absolute md:right-40 z-10 mb-5 lg:mb-0'>
          <img src={AppLogo} alt="" className='lg:w-80 w-40' />
        </div>
        <div className='hidden lg:table-row rounded-2xl bg-gradient-to-b from-[#5E43FF] to-[#B570FD] w-80 relative -right-56 h-96'></div>
      </div>
    </div>
    </>
  );
}

export default AboutApp
