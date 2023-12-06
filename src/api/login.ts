import ENDPOINTS from "./endpoints";

function Login(data: any){
  return fetch(ENDPOINTS.login, {
    method: 'POST',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body: JSON.stringify(data)
  });
}

export default Login;
