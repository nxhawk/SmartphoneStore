import { valueInArray } from "../utils/helper";
import { AiFillStar } from "react-icons/ai";

interface Props {
  currentStar: number;
  star: Array<number>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  toggleStar: Function;
}

const FilterStarButton = ({ currentStar, star , toggleStar}: Props) => {
  return (
    <button 
    className={`flex items-center md:gap-1 shadow border-2 border-amber-500 px-3 py-1 rounded-lg md:text-lg text-base ${valueInArray(currentStar, star)?'bg-amber-500 text-white hover:bg-amber-600 hover:border-amber-600':'hover:text-white hover:bg-amber-500 text-amber-500'}`}
    onClick={() => toggleStar(currentStar)}
    >{currentStar} <AiFillStar/></button>
  )
}

export default FilterStarButton