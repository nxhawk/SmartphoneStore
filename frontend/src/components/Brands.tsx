import { Dispatch, SetStateAction } from "react"
import brandsData from "../constants/brands.json" 
import filterOption from "../constants/filter.json" 
import { filterProps } from "../pages/AllProduct"
import ButtonFilter from "./ButtonFilter"
import SearchProductBar from "./SearchProductBar"

const Brands = ({ addFilterOption, setSearchValueRoot }: {  addFilterOption: (option: filterProps) =>void, setSearchValueRoot: Dispatch<SetStateAction<string>> }) => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center cursor-pointer">
        {
          brandsData["brands"].map((item, key)=>(
            <div key={key} className="p-2 border-2 border-white hover:border-gray-400 overflow-hidden flex justify-center"
            onClick={() => addFilterOption({
              option_root: "brand",
              option_key: item.name,
              option_name: item.name,
            })}
            >
              <img src={item.image} className="w-24 sm:w-28 duration-150 hover:scale-125 ease-linear"/>
            </div>
          ))
        }
      </div>
      
      <div className="flex justify-center mt-4">
        <SearchProductBar setSearchValueRoot={setSearchValueRoot}/>
      </div>

      {/* filter */}
      <div className="flex gap-2 flex-wrap items-center justify-center">
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