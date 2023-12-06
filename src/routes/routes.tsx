import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage.tsx';
import InspirePage from '../pages/InspirePage.tsx';
import LandingPage from '../pages/LandingPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import InfografisMoodPage from '../pages/InfografisMoodPage.tsx';
import RegisterPage from '../pages/RegisterPage.tsx';
import DashboardMoodPage from '../pages/DashboardMoodPage.tsx';
import DetailArticle from '../pages/DetailArticle.tsx';
import {GuestRegisterPage} from '../pages/GuestRegisterPage.tsx';
import Tes from '../pages/Tes.tsx';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/inspire',
    element: <InspirePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/infografis',
    element: <InfografisMoodPage />,
  },
  {
    path: '/logout',
    element: <LandingPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/guest-register',
    element: <GuestRegisterPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardMoodPage />,
  },
  {
    path: '/article/:slug',
    element: <DetailArticle />,
  },
  {
    path: '/tes',
    element: <Tes />,
  },
]);

export default routes;
