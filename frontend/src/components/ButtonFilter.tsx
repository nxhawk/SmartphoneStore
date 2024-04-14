import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";

interface OptionProps {
  name: string;
  t_key: string;
  options: {
    name: string; 
    key: string; 
  }[]; 
  // eslint-disable-next-line @typescript-eslint/ban-types
  addFilterOption: Function;
}


const ButtonFilter = ( {name, t_key, options, addFilterOption} : OptionProps) => {
  const [hover, setHover] = useState(false)

  return (
    <div className="relative">
      <div className={`duration-100 ease-linear shadow border px-4 py-1 rounded ${hover?'bg-green-800':'bg-gray-700'} text-white cursor-pointer`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="flex gap-1 items-center ease-linear duration-100">
        {name} 
        {
          hover?<BiDownArrow/>:<BiRightArrow />
        }
      </span>
      </div>
      <div className={`font-medium w-32 text-gray-700 rounded z-20 flex-col absolute top-0 translate-y-8 left-0 ${hover?'flex':'hidden' } ease-in-out duration-100`}
        style={{"backgroundColor": "rgba(255, 255, 255, .8)", "boxShadow": "0px 8px 16px 0px rgba(0,0,0,0.5)"}}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {
          options.map((item) =>(
            <span 
              className="cursor-pointer hover:bg-gray-500 hover:text-white p-2" 
              key={item.key}
              onClick={() => addFilterOption({
                option_root: t_key,
                option_key: item.key,
                option_name: item.name,
              })}
            >{item.name}</span>
          ))
        }
      </div>
    </div>
  )
}

export default ButtonFilter