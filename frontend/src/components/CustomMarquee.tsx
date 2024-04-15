import Marquee from "react-fast-marquee";

const CustomMarquee = ({ message }: {message: string}) => {
  return (
    <div className="px-1">
      <div className="bg-blue-200 py-3 shadow-inner rounded-sm">
        <Marquee className="font-bold text-xl tracking-wide">{ message }</Marquee>
      </div>
    </div>
  )
}

export default CustomMarquee