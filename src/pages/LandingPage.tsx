/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable keyword-spacing */
import Navbar from '../components/Landing Page/Navbar';
import Banner from '../components/Landing Page/Banner';
import Footer from '../components/Landing Page/Footer';
import Features from '../components/Landing Page/Features';
import DownloadCard from '../components/Landing Page/DownloadCard';
import AboutApp from '../components/Landing Page/AboutApp';
import Articles from '../components/Landing Page/Articles';

function LandingPage() {
  return(
    <>
    <div className="bg-white w-full">
      <Navbar />
      <Banner />
      <AboutApp />
      <Features />
      <DownloadCard/>
      <Articles />
      <Footer />
    </div>
    </>
  );
}

export default LandingPage;
