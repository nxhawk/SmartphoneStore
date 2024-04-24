import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineGoogle, AiFillHome  } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { FaRegNewspaper, FaRegHandshake, FaInfoCircle } from "react-icons/fa";
import { BiSolidWrench } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import CustomTab from "./CustomTab";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/')[1] || '';
  const [t] = useTranslation("global");
  return (
    <div className="bg-neutral-200 border border-b-1 border-neutral-300 dark:bg-slate-800 dark:border-slate-900">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between">
          <div className="flex w-3/12">
            <div className="py-2 px-1 hover:bg-sky-800 hover:text-white text-slate-500">
              <Link to={'/'}>
                <BiLogoFacebook className=" hover:bg-sky-800"/>
              </Link>
            </div>
            <div className="py-2 px-1 hover:bg-sky-400 hover:text-white text-slate-500">
              <Link to={'/'}>
                <AiOutlineTwitter className=" hover:bg-sky-400"/>
              </Link>
            </div>
            <div className="py-2 px-1 hover:bg-red-500 hover:text-white text-slate-500">
              <Link to={'/'}>
                <AiOutlineGoogle className=" hover:bg-red-500"/>
              </Link>
            </div>
            <div className="py-2 px-1 hover:bg-red-600 hover:text-white text-slate-500">
              <Link to={'/'}>
                <TfiYoutube className=" hover:bg-red-600"/>
              </Link>
            </div>
          </div>
          <div className="text-slate-500 text-lg flex w-9/12 justify-around">
            <CustomTab
              title={t("navbar.Home")}
              isSelected={pathname===''}
              link="/"
            >
                <AiFillHome className="mr-1 mt-2 lg:mt-0" />
            </CustomTab>
            <CustomTab
              title={t("navbar.News")}
              isSelected={pathname==='news'}
              link="/news"
            >
                <FaRegNewspaper className="mr-1 mt-2 lg:mt-0" />
            </CustomTab>
            <CustomTab
              title={t("navbar.Hiring")}
              isSelected={pathname==='hiring'}
              link="/hiring"
            >
              <FaRegHandshake className="mr-1 mt-2 lg:mt-0" />
            </CustomTab>

            <CustomTab
              title={t("navbar.About")}
              isSelected={pathname==='about'}
              link="/about"
            >
              <FaInfoCircle className="mr-1 mt-2 lg:mt-0" />
            </CustomTab>

            <CustomTab
              title={t("navbar.Maintenance")}
              isSelected={pathname==='maintenance'}
              link="/maintenance"
            >
              <BiSolidWrench className="mr-1 mt-2 lg:mt-0" />
            </CustomTab>

            <CustomTab
              title={t("navbar.Contact")}
              isSelected={pathname==='contact'}
              link="/contact"
            >
              <BsFillTelephoneFill className="mr-1 mt-2 lg:mt-0" />
            </CustomTab>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar