import { Link } from "react-router-dom"
import { useState } from "react"
import ReactStars from "react-rating-stars-component";
import { convertToVND } from "../utils/helper";

interface Props {
  image: string;
  name: string;
  price: number;
  sale: number;
  star: number;
  comments: number;
}

const Product = ({ image, name, price, sale, star, comments }: Props) => {
  const [hover, setHover] = useState(false)

  return (
    <Link to={'/'} className='border rounded-sm p-2 flex flex-col justify-between' 
      onMouseLeave={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
    >
      <div>
        <img src={image} className={`duration-100 ease-out w-fit p-2 ${hover?"text-blue-500":"translate-y-2"}`}/>
        <p className={`${hover?"text-blue-500":""} text-sm mt-4`}>{name}</p>
      </div>
      <div>
        <div className="flex flex-wrap gap-2 justify-between text-xs mt-2 items-center">
          <strong className="text-red-600">{convertToVND(price)}</strong>
          <s>{convertToVND(sale)}</s>
        </div>
        <div className="flex flex-wrap items-center justify-between mt-1">
          <ReactStars
            count={5}
            value={star}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
          <span className="text-xs text-gray-500 font-semibold">{comments} đánh giá</span>
        </div>
      </div>
      
    </Link>
  )
}

export default Product