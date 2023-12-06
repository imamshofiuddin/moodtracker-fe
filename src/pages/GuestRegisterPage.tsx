import { useState } from "react";
import IlustrationImage2 from "../assets/img/ilustration-2.png";
import MoodTrackerLogo from '../assets/img/mood-tracker-logo-text.png';
import Login from "../api/login";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import {BiArrowBack} from "react-icons/bi"
import { GuestRegister } from "../api/guest";

export function GuestRegisterPage(){
  if(Cookies.get('user_type') !== 'guest'){
    window.location.href='/dashboard'
  } else {
    return <GuestRegisterPageComponent/>
  }
}

function GuestRegisterPageComponent(){
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [passwdConfirm, setPasswordConfirm] = useState("");
  const [userData, setUserData] = useState(null);
  const [alert,setAlert] = useState(<></>);

  async function register(e: any) {
    e.preventDefault();
    let guestId = Cookies.get('guest_id');
    if(guestId != undefined){
      let item={name, email, password, passwdConfirm, guestId};
      let result = await GuestRegister(item);
      if(result){
        if (result.status == 200) {
          let response = await Login({ email, password });
          response.json().then(data => {
            setUserData(data['data']);
            Cookies.set('token', data['data']['access_token']);
            Cookies.set('username', data['data']['name']);
            Cookies.remove('guest_id');
            Cookies.set('user_type', 'non-guest');

            // Set cookies here after the successful response

            console.log(userData);
            if (response.status == 200) {
              window.location.href = "/infografis";
            }
          });
        } else if(result.status == 422) {
          result.json().then(data => (setAlert(
            <div className={`flex bg-red-100 text-red-500 p-3 my-5 w-full border-2 border-red-500 rounded-md`}>
            <p className="text-center">{data['message']}</p>
            </div>
          )));
        }
      } else {
        setAlert(
          <div className={`flex bg-red-100 text-red-500 p-3 my-5 w-full border-2 border-red-500 rounded-md`}>
          <p className="text-center">Konfirmasi Password Salah</p>
          </div>
        )
      }
    } else {
      window.location.href = '/dashboard';
    }
  }

  return(
    <>
      <GuestRegisterForm registerProcess={register} nameController={setName} emailController={setEmail} passwordController={setPassword} confirmPasswordController={setPasswordConfirm} alert={alert}/>
    </>
  );
}

function GuestRegisterForm(props: any){
  return(
    <>
      <div className="bg-white min-h-screen">
      <Link to={'/dashboard'} className="rounded-md text-black flex items-center text-2xl p-4 rounded-md"><BiArrowBack/></Link>
        <div className="grid md:grid-cols-2 gap-5 px-8">
          <div className="grid grid-flow-row justify-between grid-cols-1 md:p-10">
              <img src={MoodTrackerLogo} className="h-10 mb-20"  alt="" />
              <img src={IlustrationImage2} className="w-96 mb-10 mx-auto hidden md:table-row" alt="" />
          </div>
          <div className="bg-transparent h-100 w-100 flex-col w-full h-full p-8 rounded-lg">
            <form onSubmit={props.registerProcess}>
              <div className="">
                <div className="text-4xl font-semibold my-5 text-black flex flex-col space-y-3 mb-5">
                  <div>Daftar Pengguna Tetap</div>
                  <div className="font-medium text-sm">Untuk dapat mengakses fitur unggulan kami</div>
                </div>
                {/* Error Alert */}
                {props.alert}
                <div className="mb-5">
                  <label className="block text-black" htmlFor="name">Nama</label>
                  <input required type="text" id="name" onChange={(e) => props.nameController(e.target.value)} className="border-0 border-b-2 w-full focus:ring-0 focus:border-b-[#7E57C2] text-black" placeholder="Masukkan nama"/><br />
                </div>
                <div className="mb-5">
                  <label className="block text-black" htmlFor="email">Email</label>
                  <input required type="email" id="email" onChange={(e) => props.emailController(e.target.value)} className="border-0 border-b-2 w-full focus:ring-0 focus:border-b-[#7E57C2] text-black" placeholder="Masukkan email"/><br />
                </div>
                <div className="mb-5">
                  <label className="block text-black" htmlFor="password">Kata sandi</label>
                  <input required type="password" onChange={(e) => props.passwordController(e.target.value)} className="border-0 border-b-2 w-full focus:ring-0 focus:border-b-[#7E57C2] text-black" placeholder="Masukkan kata sandi"/><br />
                </div>
                <div className="mb-5">
                  <label className="block text-black" htmlFor="password">Konfirmasi kata sandi</label>
                  <input required type="password" onChange={(e) => props.confirmPasswordController(e.target.value)} className="border-0 border-b-2 w-full focus:ring-0 focus:border-b-[#7E57C2] text-black" placeholder="Masukkan ulang kata sandi"/><br />
                </div>
              </div>
              <button type="submit" className="border-2 bg-indigo-800 text-white w-full h-16 rounded-full focus:outline-[#4c278d] drop-shadow-xl">Daftar</button>
              {/* <div className="w-full text-center mt-4 text-black">Sudah Punya Akun ? <Link to="/login">Login</Link> Sekarang</div> */}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
