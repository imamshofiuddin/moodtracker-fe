export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL.trim();

const ENDPOINTS = {
  inspire: `${BASE_API_URL}/api/inspire`,
  login: `${BASE_API_URL}/api/v1/login`,
  register: `${BASE_API_URL}/api/v1/register`,
  getMoodsYear: `${BASE_API_URL}/api/v1/mood/year`,
  getMoodsPerMonth: `${BASE_API_URL}/api/v1/mood/month`,
  amountMoodsMonth: `${BASE_API_URL}/api/v1/mood/month/statistic`,
  getActivities: `${BASE_API_URL}/api/v1/mood/activity/all`,
  crudMood: `${BASE_API_URL}/api/v1/mood`,
  article: 'https://agileteknik.com/api/v1/products/5/news/',
  guestLogin: `${BASE_API_URL}/api/v1/guest/login`,
  guestRegister: `${BASE_API_URL}/api/v1/guest/register`,
};

export default ENDPOINTS;
