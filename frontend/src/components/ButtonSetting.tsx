interface ButtonSettingProps {
  name: string;
  action: (name: string) => void;
  currentValue: string;
}

const ButtonSetting = ({ name, action, currentValue }: ButtonSettingProps) => {
  return (
    <button 
      onClick={() => action(name)}
      className={`border px-4 py-1 rounded-lg outline-none hover:text-white hover:bg-black hover:border-black ${currentValue==name&&'bg-black border-black text-white'}`}>
        {name}
    </button>
  )
}

export default ButtonSetting