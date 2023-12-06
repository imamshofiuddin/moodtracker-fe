import ENDPOINTS from "./endpoints";
import Cookies from 'js-cookie';

export function GuestLogin(){
  let body = {};

  if(Cookies.get('guest_id') != undefined){
    body = {
      "guest_id" : Cookies.get('guest_id')
    }
  } else {
    body = {
      "guest_id" : ''
    }
  }

  return fetch(ENDPOINTS.guestLogin, {
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify(body)
  });
}

export function GuestRegister(data: any){
  if(!validate(data)){
    return false;
  }
  return fetch(ENDPOINTS.guestRegister, {
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify({
      "name":data.name,
      "email":data.email,
      "password":data.password,
      "guest_id":data.guestId
    })
  });
}


function validate(data: any){
  if(data.passwdConfirm != data.password){
    return false;
  }
  return true;
}
