import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  isSelected: boolean;
  link: string;
  title: string;
}

const CustomTab = ({ children, isSelected, link, title }: Props) => {
  return (
    <Link to={link} title={title}>
      <div className={`flex items-center lg:border-b-4 ${isSelected?'border-black text-black dark:text-white dark:border-white dark:lg:border-white':'hover:border-black hover:text-black dark:hover:border-white dark:hover:text-white dark:lg:border-slate-600 '}`}>
        {children}
        <span className="hidden lg:block">{title}</span>
      </div>
  </Link>
  )
}

export default CustomTab