import { useState } from 'react';
import LogoText from '../../assets/img/mood-tracker-logo-text.png';
import Logo from '../../assets/img/mood-tracker-logo.png';
import { BiStats } from 'react-icons/bi';
import { MdOutlineMood } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
export default function Sidebar(props: any){
  const menu = [
    {name: 'My Mood', icon:<MdOutlineMood size={20}/>, link:"/dashboard"},
    {name: 'Infografis', icon:<BiStats size={20}/>, link: (Cookies.get('user_type') == 'guest') ? '/guest-register' : '/infografis'},
  ];

  const [activeMenu, setActiveMenu] = useState("My Mood");
  if(activeMenu != props.menuActive){
    setActiveMenu(props.menuActive);
  }
  return(
  <>
    <div className="md:z-10 z-30 md:h-full min-h-screen h-screen fixed md:relative border-r border-gray-200 md:w-64 px-10 space-y-2 bg-white">
      <div className='py-10 hidden md:flex'>
        <img src={LogoText} className='w-36' alt="" />
      </div>
      <div className='py-10 flex md:hidden'>
        <img src={Logo} className='w-11 mx-auto' alt=""/>
      </div>
      <div className="space-y-20">
        <div>
          <ul className='space-y-7'>
          <div className='mb-3 font-bold text-indigo-800 md:text-left text-center'>Menu</div>
          {
            menu.map((val, index) => {
              return(
              <div className="flex place-content-center">
              <li key={index} className=''>
                <Link to={val.link}>
                  <div className={`flex w-14 md:w-full md:px-8 flex-row items-center hover:bg-indigo-800 hover:text-white cursor-pointer p-3 rounded-2xl ${(activeMenu == val.name) ? 'bg-indigo-800 text-white shadow-md' : 'bg-gray-100 text-black'}`}>
                    <div className='md:mr-5 mx-auto md:mx-0'>{val.icon}</div>
                    <div className="hidden md:table-row">
                      <div>{val.name}</div>
                    </div>
                  </div>
                </Link>
              </li>
              </div>)
            })
          }
          </ul>
        </div>
      </div>
    </div>
    <div className='bg-black/20 w-screen h-screen fixed z-20 md:hidden' onClick={props.onClose}></div>
  </>
  );
}
