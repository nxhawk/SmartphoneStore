import { Link } from "react-router-dom";

interface Props {
  banner: string;
  link: string;
  title: string;
  from: string;
  time?: string;
}

const SingleNews = ({ banner, link, title, from, time } : Props) => {
  return (
    <Link target="_blank" to={link} className='flex flex-col'>
      <div className="rounded-xl h-36 overflow-y-hidden">
        <img src={banner} className="w-full object-cover"/>
      </div>
      <div className="font-bold text-xl mt-2">{title}</div>
      <div className="text-neutral-500 font-medium mt-2">
        <span className="mr-7">{from}</span>
        <span>{time}</span>
      </div>
    </Link>
  )
}

export default SingleNews