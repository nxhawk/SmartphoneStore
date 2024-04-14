import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter, AiOutlineGoogle, AiFillHome  } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { FaRegNewspaper, FaRegHandshake, FaInfoCircle } from "react-icons/fa";
import { BiSolidWrench } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-neutral-200 border border-b-1 border-neutral-300">
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
            <Link to={'/'} title="Trang chủ">
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <AiFillHome className="mr-1 mt-2 lg:mt-0" />
                <span className="hidden lg:block">Trang chủ</span>
              </div>
            </Link>

            <Link to={'/news'} title="Tin tức">
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <FaRegNewspaper className="mr-1 mt-2 lg:mt-0" />
                <span className="hidden lg:block">Tin tức</span>
              </div>
            </Link>

            <Link to={'/hiring'} title="Tuyển dụng">
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <FaRegHandshake className="mr-1 mt-2 lg:mt-0" />
                <span className="hidden lg:block">Tuyển dụng</span>
              </div>
            </Link>

            <Link to={'/about'} title="Giới thiệu">
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <FaInfoCircle className="mr-1 mt-2 lg:mt-0" />
                <span className="hidden lg:block">Giới thiệu</span>
              </div>
            </Link>

            <Link to={'/maintenance'} title="Bảo hành">
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <BiSolidWrench className="mr-1 mt-2 lg:mt-0" />
                <span className="hidden lg:block">Bảo hành</span>
              </div>
            </Link>

            <Link to={'/contact'} title="Liên hệ">
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <BsFillTelephoneFill className="mr-1 mt-2 lg:mt-0" />
                <span className="hidden lg:block">Liên hệ</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar