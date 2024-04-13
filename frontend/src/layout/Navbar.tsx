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
              <BiLogoFacebook className=" hover:bg-sky-800"/>
            </div>
            <div className="py-2 px-1 hover:bg-sky-400 hover:text-white text-slate-500">
              <AiOutlineTwitter className=" hover:bg-sky-400"/>
            </div>
            <div className="py-2 px-1 hover:bg-red-500 hover:text-white text-slate-500">
              <AiOutlineGoogle className=" hover:bg-red-500"/>
            </div>
            <div className="py-2 px-1 hover:bg-red-600 hover:text-white text-slate-500">
              <TfiYoutube className=" hover:bg-red-600"/>
            </div>
          </div>
          <div className="text-slate-500 text-lg flex w-9/12 justify-around">
            <Link to={'/'}>
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <AiFillHome className="mr-1" />
                Trang chủ
              </div>
            </Link>

            <Link to={'/news'}>
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <FaRegNewspaper className="mr-1" />
                Tin tức
              </div>
            </Link>

            <Link to={'/hiring'}>
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <FaRegHandshake className="mr-1" />
                Tuyển dụng
              </div>
            </Link>

            <Link to={'/about'}>
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <FaInfoCircle className="mr-1" />
                Giới thiệu
              </div>
            </Link>

            <Link to={'/maintenance'}>
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <BiSolidWrench className="mr-1" />
                Bảo hành
              </div>
            </Link>

            <Link to={'/contact'}>
              <div className="flex items-center hover:border-b-4 hover:border-black hover:text-black">
                <BsFillTelephoneFill className="mr-1" />
                Liên hệ
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar