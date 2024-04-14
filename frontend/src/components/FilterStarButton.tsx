import { valueInArray } from "../utils/helper";

interface Props {
  currentStar: number;
  star: Array<number>;
  // eslint-disable-next-line @typescript-eslint/ban-types
  toggleStar: Function;
}

const FilterStarButton = ({ currentStar, star , toggleStar}: Props) => {
  console.log(`FilterStarButton`, currentStar in star);
  return (
    <button 
    className={`shadow border-2 border-amber-500 px-3 py-1 rounded-lg text-lg ${valueInArray(currentStar, star)?'bg-amber-500 text-white hover:bg-amber-600 hover:border-amber-600':'hover:text-white hover:bg-amber-500 text-amber-500'}`}
    onClick={() => toggleStar(currentStar)}
    >{currentStar} sao</button>
  )
}

export default FilterStarButton