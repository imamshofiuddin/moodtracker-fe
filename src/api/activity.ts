import ENDPOINTS from "./endpoints";
import Cookies from 'js-cookie';
const token = Cookies.get('token');

export function GetActivities() {
  return fetch(ENDPOINTS.getActivities, {
    method: 'GET',
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json",
      "Authorization":`Bearer ${token}`,
    },
  });
}
