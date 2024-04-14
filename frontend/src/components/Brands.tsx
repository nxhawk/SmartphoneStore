import brandsData from "../constants/brands.json" 
import filterOption from "../constants/filter.json" 
import ButtonFilter from "./ButtonFilter"

// eslint-disable-next-line @typescript-eslint/ban-types
const Brands = ({ addFilterOption }: { addFilterOption: Function }) => {
  return (
    <div>
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
      <div className="mt-6 flex gap-4 flex-wrap items-center justify-center">
        {
          filterOption["filter"].map((option) =>
            <ButtonFilter 
              options={option.options}
              name={option.name}
              t_key={option.key}
              key={option.key}
              addFilterOption={addFilterOption}
            />
          )
        }
      </div>
    </div>
  )
}

export default Brands