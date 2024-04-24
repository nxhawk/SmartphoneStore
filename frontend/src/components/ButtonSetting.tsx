import { useTranslation } from "react-i18next";

interface ButtonSettingProps {
  name: string;
  action: (name: string) => void;
  currentValue: string;
}

const ButtonSetting = ({ name, action, currentValue }: ButtonSettingProps) => {
  const [, i18n] = useTranslation("global");

  const handleClick = () => {
    if (name== 'vi' || name == 'en' || name == 'ch' ){
      i18n.changeLanguage(name);
    }
    action(name)
  }
  return (
    <button 
      onClick={handleClick}
      className={`border px-4 py-1 rounded-lg outline-none hover:text-white hover:bg-black hover:border-black ${currentValue==name&&'bg-black border-black text-white'} uppercase`}>
        {name}
    </button>
  )
}

export default ButtonSetting