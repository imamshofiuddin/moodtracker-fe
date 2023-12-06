import BannerBg from '../../assets/img/banner.png'
import MockupApp from '../../assets/img/mockup-display-moodtracker.png'
import PlayStoreLogo from '../../assets/img/google-play.png'
import { Link } from 'react-router-dom';

function Banner() {
  return(
    <>
      <div style={{backgroundImage: `url(${BannerBg})`}} className='bg-cover z-[-1] w-full top-0 md:px-28 md:py-36 px-12 py-36'>
        <div className='md:grid md:grid-cols-2 gap-14 md:grid-flow-row items-center'>
            <div className="left-content ">
              <h1 className='mb-10 font-extrabold lg:text-[68px] md:text-[50px] text-[30px] text-black text-center md:text-left'>Track your <br /><span className='text-[#F9D007]'>moods</span>, unlock <br /> your <span className='text-[#4B4895]'>potential</span></h1>
              <div className="md:hidden">
                <img className='w-full right-0 md:table-row' src={MockupApp} alt="" />
              </div>
              <p className='text-lg mb-5 text-[#797979] text-center md:text-left'>Aplikasi mood tracker membantu Anda memantau dan mencatat perubahan suasana hati Anda dari waktu ke waktu</p>
              <div className="flex items-center space-x-6 md:flex-row flex-col space-y-5 md:space-y-0">
                <Link to="/login"><button className='text-white font-bold text-xl shadow-md w-full md:w-60 md:h-16 bg-indigo-800 px-7 py-3 rounded-full'>Mulai versi web</button></Link>
                <div className='text-black'>Atau</div>
                <a href="https://play.google.com/store/apps/details?id=com.agilepdbl.hl3_moodtracker"><img src={PlayStoreLogo} className='w-56'  alt="" /></a>
              </div>
            </div>
            <div className="right-content">
              <img className='w-full right-0 hidden md:table-row' src={MockupApp} alt="" />
            </div>
        </div>
      </div>
    </>
  );
}

export default Banner
