import { useState } from "react";
import IlustrationImage1 from "../assets/img/ilustration-1.png";
import MoodTrackerLogo from '../assets/img/mood-tracker-logo-text.png';
import Register from "../api/register";
import Login from "../api/login";
import Cookies from 'js-cookie';
import { Link } from "react-router-dom";
import { GuestLogin } from "../api/guest";

function RegisterPage(){
  const [name, setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [userData, setUserData] = useState(null);
  const [passwdConfirm, setPasswordConfirm] = useState("");
  const [alert,setAlert] = useState(<></>);

  if(Cookies.get('token')){
    window.location.href = '/dashboard';
  } else {
    async function register(e: any) {
      e.preventDefault();
      let item={name, email, password, passwdConfirm};
      let result = await Register(item);
      if(result){
        if(result.status == 200){
          let response = await Login({email, password});
          response.json().then(data => (Cookies.set('token', data['data']['access_token']), Cookies.set('username', data['data']['name']), Cookies.set('user_type','non-guest')));
          if(response.status == 200){
            window.location.href = "/dashboard";
          }
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

    }

    async function guestLogin() {
      let result = await GuestLogin();
      result.json().then(data => (setUserData(data['data']), Cookies.set('token', data['data']['access_token']), Cookies.set('username', data['data']['name']), Cookies.set('guest_id', data['data']['agile_teknik_user']['metadata']['agileteknik_user']['guest_id']), Cookies.set('user_type','guest')));
      console.log(userData)
      if(result.status == 200 && Cookies.get('token')){
        window.location.href = "/dashboard";
      }
    }
    return(
      <>
      <RegisterForm nameController={setName} emailController={setEmail} passwordController={setPassword} confirmPasswordController={setPasswordConfirm} registerProcess={register} guestProcess={guestLogin} alert={alert}/>
      </>
    );
  }

}

function RegisterForm(props: any){
  return(
    <>
      <div className="grid md:grid-cols-2 gap-5 p-8 bg-white min-h-screen">
        <div className="grid grid-flow-row justify-between grid-cols-1 md:p-10">
          <img src={MoodTrackerLogo} className="h-10 mb-20"  alt="" />
          <form onSubmit={props.registerProcess}>
            <div className="">
              <p className="text-4xl font-semibold my-5 text-black">Daftar</p>
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
                <label className="block text-black" htmlFor="password">Konfirmasi Kata sandi</label>
                <input required type="password" onChange={(e) => props.confirmPasswordController(e.target.value)} className="border-0 border-b-2 w-full focus:ring-0 focus:border-b-[#7E57C2] text-black" placeholder="Masukkan ulang kata sandi"/><br />
              </div>
            </div>
            <button type="submit" className="border-2 bg-indigo-800 text-white w-full h-16 rounded-full focus:outline-[#4c278d] drop-shadow-xl">Daftar</button>
          </form>
            <button onClick={props.guestProcess} className="bg-gray-300 w-full h-16 rounded-full mt-5 text-black">Coba tanpa mendaftar</button>
            <div className="w-full text-center mt-4 text-black">Sudah Punya Akun ? <Link to="/login">Masuk</Link> Sekarang</div>
        </div>
        <div className="bg-[#141C5C] h-100 w-100 hidden md:flex flex-col  w-full h-full p-8 rounded-lg">
          <div className="mx-auto">
            <img src={IlustrationImage1} className="w-96 mb-10 mx-auto" alt="" />
            <p className="text-white text-4xl font-bold items-center">Register to <br /> MoodTracker</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
