import ENDPOINTS from "./endpoints";

function Register(data: any){
  if(!validate(data)){
    return false;
  }
  return fetch(ENDPOINTS.register, {
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify({
      "name":data.name,
      "email":data.email,
      "password":data.password
    })
  });
}

function validate(data: any){
  if(data.passwdConfirm != data.password){
    return false;
  }
  return true;
}

export default Register;
