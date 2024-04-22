import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const ButtonSetting = () => {
  const navigate = useNavigate();
  return (
    <button className='fixed bottom-2'
    style={{left: 'calc(100vw - 100px)' }} 
    onClick={() => {
      navigate('/settings')
    }}
    >
        <IoSettings className="text-3xl text-gray-500 opacity-40 hover:opacity-100"/>
    </button>
  )
}

export default ButtonSetting