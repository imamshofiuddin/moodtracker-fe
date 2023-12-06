import { format } from "date-fns";
import { Link } from "react-router-dom";

function Card(props: any){
  return(
  <>
    <Link to={{ pathname: `/article/${props.data['slug']}`}}>
    <div className="h-full w-80 bg-[#F9F9F9] rounded-lg hover:scale-110 transition-all hover:shadow-lg">
        <div className="p-5">
          <img className="rounded-lg" src={props.data['banner_url']} alt="" />
        </div>
      <div className="p-5 -mt-5 flex flex-col h-full">
        <div className="my-4 text-12 text-gray-500">{format(new Date(props.data['published_at'].slice(0, -1)), 'dd-MM-yyyy')}</div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">{props.data['title']}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 w-full"><div className="line-clamp-2">{props.data['excerpt']}</div></p>
        <small className="text-indigo-800 font-bold">Read more..</small>
      </div>
    </div>
    </Link>
  </>
  )
}

export default Card;
