import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Article } from "../api/article";
import { format } from "date-fns";
import Footer from "../components/Landing Page/Footer";
import Card from "../components/Landing Page/Card";

function DetailArticle(){
  const location = useLocation();
  const [articlesData, setArticleData] = useState(null);
  const [sumArticleData, setSumArticleData] = useState(0);

  const explodedPathname = location.pathname.split('/');
  const slug = explodedPathname[2];
  let selectedArticle=null;

  async function getArticle(){
    const response = await Article();
    response.json().then((data)=>(setArticleData(data['data']), setSumArticleData(data['data'].length)));
  }


  for (let index = 0; index < sumArticleData; index++) {
    if(articlesData != null && articlesData[index]['slug'] == slug){
      selectedArticle = articlesData[index];
      break
    }
  }

  const handleBackButton = () => {
    window.location.href = '/';
  };

  useEffect(()=>{
    getArticle();
    window.addEventListener('popstate', handleBackButton);
    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  },[])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return(
    <>
    <div className="bg-white">
    {selectedArticle != null && articlesData != null ?
    <>
    <div className="m-4 space-y-10 mb-20">
      <div className="w-full min-h-40 bg-cover rounded-lg" style={{ backgroundImage: `url(${selectedArticle['banner_url']})` }}>
        <div className="w-full rounded-lg h-full bg-[#240c8fad] flex items-center">
          <div className="p-20">
            <div className="bg-white p-3 w-32 text-center mb-5 text-black rounded-lg">{format(new Date(selectedArticle['published_at']), 'dd-MM-yyyy')}</div>
            <div className="text-4xl font-bold text-white">{selectedArticle['title']}</div>
          </div>
        </div>
      </div>
      <div
        className="md:p-20 p-10 text-black"
        dangerouslySetInnerHTML={{ __html: selectedArticle['content'] }}
      />
      <div className="text-center font-bold text-black text-3xl">Related Articles</div>
      <div className="gap-10 mx-16 grid lg:grid-cols-3 md:grid-cols-2 place-content-center items-center my-16">
        {articlesData != null
        ?
        Object.keys(articlesData).map((article, index) => (
          <div className="flex items-center justify-center" onClick={handleScrollToTop}>
            <Card key={index} data={articlesData[article]}/>
          </div>
        ))
        : null }
      </div>
    </div>
    <Footer />
    </>
    : null }
    </div>
    </>
  );
}

export default DetailArticle
