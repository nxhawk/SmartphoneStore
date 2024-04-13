import Marquee from "react-fast-marquee";

const CustomMarquee = ({ message }: {message: string}) => {
  return (
    <div className="bg-blue-200 py-3 shadow-inner rounded-sm">
      <Marquee className="font-bold text-xl">{ message }</Marquee>
    </div>
  )
}

export default CustomMarquee