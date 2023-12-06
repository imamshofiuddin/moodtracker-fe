import Sidebar from "../components/Sidebar";
import Cookies from 'js-cookie';
import { useState } from "react";
import {BiMenu} from 'react-icons/bi';
import { Link } from "react-router-dom";

function Dashboard(props: any) {
  if(!Cookies.get('token')){//
    window.location.href = '/login';
  } else {
    console.log(Cookies.get('guest_id'))
    const logout = () => {
      Cookies.remove('token');
      Cookies.remove('username');
      Cookies.remove('user_type');
      window.location.href = "/";
    }
    const [openSidebar, setOpenSidebar] = useState(false);
    return(
      <>
        <div className="w-full h-screen bg-gray-100 overflow-x-scroll">
          <div className="flex flex-row">
            <div className={`${openSidebar ? '' : 'hidden'} md:table-row`}>
              <Sidebar menuActive={props.menuActive} onClose={() => setOpenSidebar(false)}/>
            </div>
              {/* Topbar */}
              <div className="flex flex-col w-full z-10">
                <div className="w-full bg-white items-center shadow-md p-5 z-0">
                  <div className="flex flex-row text-black">
                      <div className={`md:hidden rounded-md shadow p-2 bg-white cursor-pointer`} onClick={() => setOpenSidebar(!openSidebar)}>
                        <BiMenu size={30} />
                      </div>
                      <div className="ml-auto flex flex-row items-center">
                        {/* <div>{Cookies.get('username')}</div>
                        <div><a href="/logout" onClick={logout}>( Logout )</a></div> */}
                        <ProfileDropdown username={Cookies.get('username')} logoutProcess={logout}/>
                      </div>
                  </div>
                </div>
                <props.section />
              </div>
          </div>
        </div>
      </>
    );
  }

}

function ProfileDropdown(props: any){
  const [isOpen, setIsOpen] = useState(false);
  return(
    <>
    <button onClick={() => setIsOpen(!isOpen)} id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className="text-black bg-slate-100 hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">{props.username} <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
      </svg>
    </button>

    <div id="dropdownDivider" className={`${isOpen ? '' : 'hidden'} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute top-20 right-8`}>
      {Cookies.get('user_type') === 'non-guest' ? null :
        <>
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
          <li>
            <Link to={'/guest-register'} className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Daftar Pengguna Tetap</Link>
          </li>
        </ul>
        </>
      }
        <div className="py-2" onClick={props.logoutProcess}>
          <a href="#" className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</a>
        </div>
    </div>
    </>
  )
}

export default Dashboard;
