import { filterProps } from '../pages/AllProduct'
import { IoCloseSharp } from "react-icons/io5";

interface Props {
  clearFilterOption: () => void;
  removeOneFilterOption: (option_root: string, option_name?: string) => void;
  filter: filterProps[] 
}

const FilterList = ({ filter, clearFilterOption, removeOneFilterOption }: Props) => {
  return (
    <div className='mt-4 md:mt-7 lg:w-10/12 w-full mx-auto flex flex-wrap gap-1 items-center justify-center'>
      {
        filter.length > 0 && (
          <div 
            className='bg-sky-500 px-2 py-1 rounded font-medium text-sm text-white flex gap-1 items-center cursor-pointer shadow-lg'
            onClick={() => clearFilterOption()}
          >
            Xóa bộ lọc
          </div>
        )
      }
      {
        filter.map((op, key) => (
          <div 
            key={key}
            className='bg-sky-500 px-2 py-1 rounded font-medium text-sm text-white flex gap-1 items-center shadow-lg'
          >
            {op.option_name}
            <IoCloseSharp className='cursor-pointer hover:text-red-600 ease-in-out' style={{
              fontSize: "22px",
            }}
            onClick={() => removeOneFilterOption(op.option_root, op.option_name)}
            />
          </div>
        ))
      }
    </div>
  )
}

export default FilterList