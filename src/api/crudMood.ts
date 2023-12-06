import ENDPOINTS from "./endpoints";
import Cookies from 'js-cookie';

const token = Cookies.get('token');
const commonHeaders = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": `Bearer ${token}`,
};

function fetchWithHeaders(url: any, method: any, body: any = null) {
  return fetch(url, {
    method,
    headers: commonHeaders,
    body: body ? JSON.stringify(body) : null,
  });
}

export function BulkMoodPerMonth(date: string) {
  return fetchWithHeaders(ENDPOINTS.getMoodsPerMonth + `/${date}`, 'GET');
}

export function CreateMoodApi(data: any) {
  return fetchWithHeaders(ENDPOINTS.crudMood, 'POST', data);
}

export function DeleteMoodApi(date: string) {
  return fetchWithHeaders(ENDPOINTS.crudMood + `/${date}`, 'DELETE');
}

export function UpdateMoodApi(date: string, data: any) {
  return fetchWithHeaders(ENDPOINTS.crudMood + `/${date}`, 'PUT', data);
}
