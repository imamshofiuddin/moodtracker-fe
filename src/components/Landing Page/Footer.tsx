import FooterBg from '../../assets/img/footer-bg.png'

function Footer() {
  return(
    <>
      <div style={{backgroundImage: `url(${FooterBg})`}} className="w-full bottom-0 p-10">
        {/* <p className='text-white text-[50px] font-bold mb-40'>About Us</p> */}
        <div className='border-t-2 border-[#cfcfcf] bottom-0 py-5'>
          <p className='text-white text-16'>Copyright | Moodtracker Team</p>
        </div>
      </div>
    </>
  );
}

export default Footer
