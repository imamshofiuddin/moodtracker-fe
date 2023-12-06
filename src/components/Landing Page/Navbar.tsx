import { useEffect, useState } from 'react';
import MoodTrackerLogo from '../../assets/img/mood-tracker-logo-text.png';
import { Link } from 'react-router-dom';

function Navbar(){
  const Links = [
    {name: 'Beranda', link: '/'},
    {name: 'Fitur', link: '#features'},
    {name: 'Download', link: '#download'},
    {name: 'Artikel', link: '#articles'},
  ];

  let [isOpen, setIsOpen] = useState(false);
  let [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scroll]);

  return(
    <>
      <div className="w-full fixed top-0 z-20">
        <div className={`lg:px-10 py-8 px-7 lg:flex justify-between bg-transparent items-center transition-all ${scroll ? 'bg-white shadow-lg' : 'lg:bg-transparent '} ${isOpen ? 'bg-white' : ''}`}>
          {/* Logo Here */}
          <div>
            <img src={MoodTrackerLogo} className='lg:w-100 w-48' alt=""/>
          </div>

          {/* Menu Icon */}
          <div onClick={() => setIsOpen(!isOpen)} className="w-7 h-7 absolute right-8 lg:top-6 top-10 cursor-pointer lg:hidden text-black">
            {
              isOpen ?
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg> :

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
              </svg>
            }

          </div>

          {/* nav links here */}
          <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 transition-all lg:pl-0 pl-9 duration-500 ease-in ${ isOpen ? 'top-24 w-full bg-white lg:bg-transparent lg:place-content-end' : 'top-[-490px]'} `}>
            <div className='lg:flex lg:items-center lg:p-4 lg:rounded-full lg:bg-opacity-20 lg:bg-white'>
              {Links.map(link => (
                <li className='font-semibold my-7 lg:my-0 lg:mx-8'>
                  <a key={link.name} className={`text-black  hover:text-black text-bold text-[18px] ${scroll ? 'lg:text-[#000000]' : 'lg:text-white'}`} href={link.link}>{link.name}</a>
                </li>
              ))}
            </div>
            <Link to="/login" className={`btn text-black p-4 px-7 lg:ml-8 rounded-full lg:static text-bold text-[18px] ${scroll ? 'bg-indigo-800 text-white' : 'lg:bg-white bg-indigo-800 lg:text-black text-white'}`}>Masuk</Link>
            <Link to="/register" className={`btn text-black p-4 px-7 lg:ml-8 rounded-full lg:static text-bold text-[18px] bg-gradient-to-r from-indigo-800 to-purple-800 text-white `}>Daftar</Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
