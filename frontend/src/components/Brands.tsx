import brandsData from "../constants/brands.json" 
import ButtonFilter from "./ButtonFilter"

const Brands = () => {
  return (
    <div className='border-y-2 p-4'>
      <div className="flex flex-wrap items-center justify-center cursor-pointer">
        {
          brandsData["brands"].map((item, key)=>(
            <div key={key} className="p-2 border-2 border-white hover:border-gray-400 overflow-hidden flex justify-center">
              <img src={item.image} className="w-28 duration-150 hover:scale-125 ease-linear"/>
            </div>
          ))
        }
      </div>

      {/* filter */}
      <ButtonFilter/>
    </div>
  )
}

export default Brands