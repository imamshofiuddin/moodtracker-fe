import PlaystoreLogo from '../../assets/img/google-play.png';
function DownloadCard() {
  return(
    <>
    <div className='place-items-center grid my-24' id='download'>
      <div className="bg-gradient-to-r from-[#684FFF] to-[#B871FE] text-white text-center place-content-center overflow-hidden rounded-3xl py-48 px-16 w-[90%] h-[80%]">
        <p className="font-extrabold text-4xl text-center mb-4">Download MoodTracker Sekarang!</p>
        <p className="text-2xl">Mulai catat dan pantau mood mu untuk kesehatan mental yang baik</p>
        <a target='blank' href="https://play.google.com/store/apps/details?id=com.agilepdbl.hl3_moodtracker"><img src={PlaystoreLogo} className='mx-auto mt-10 mb-20 w-96' alt="" /></a>
      </div>
    </div>
    </>
  );
}

export default DownloadCard;
