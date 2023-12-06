import { useEffect, useState } from "react";
import { Article } from "../../api/article";
import Card from "./Card";

function Articles(){
  const [articleData, setArticleData] = useState(null);
  async function getArticle(){
    const response = await Article();
    response.json().then((data)=>(setArticleData(data['data'])));
  }

  useEffect(()=>{
    getArticle();
  },[])

  return(
    <>
    <div className="bg-[#EFECFF] mx-auto px-2 py-4 md:w-[165px] md:h-[75px] w-40 h-16 rounded-full flex items-center" id='articles'>
      <p className="font-bold text-[#5236FF] md:text-lg text-md text-center mx-auto">Artikel</p>
    </div>
    <h1 className='font-extrabold text-center my-8 md:text-4xl text-2xl text-black px-5'>Empower your insight<br /> about mental health</h1>
    <div className="gap-10 mx-16 grid lg:grid-cols-3 md:grid-cols-2 place-content-center items-center my-16">
      {articleData != null
      ?
      Object.keys(articleData).map((article, index) => (
        <div className="flex items-center justify-center">
          <Card key={index} data={articleData[article]}/>
        </div>
      ))
      : null }
    </div>
    </>
  );
}

export default Articles;
