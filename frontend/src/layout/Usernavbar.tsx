import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';
import { BiSolidUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';

const Usernavbar = () => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div className="max-w-5xl mx-auto border-b-2 flex justify-between border-gray-100 items-center flex-wrap">
      <Link to={'/'} className='overflow-hidden'>
        <img src={logo} alt="logo" className='w-full md:w-60 mb-4 mt-2 hover:scale-105'/>
      </Link>
      <div className='flex gap-8 w-full mb-2 md:w-fit justify-center'>
          <Link to={'/'} className='flex items-center gap-2 relative'
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
          >
            <div className={`border rounded-full p-2 ${show?'text-white bg-slate-400':''}`}>
              <BiSolidUser />
            </div>
            <span className='font-semibold'>
            Tài khoản
            </span>
            {
              show && (
            <div className='z-50 absolute top-[42px] left-[-80px] w-40 bg-slate-300 text-green-700 font-semibold text-center rounded-sm'>
              <div className='hover:text-white hover:bg-neutral-700 p-2 hover:rounded-sm'>Trang người dùng</div>
              <div className='hover:text-white hover:bg-neutral-700 p-2 hover:rounded-sm'>Đăng xuất</div>
            </div>
              )
            }
          </Link>
          <Link to={'/'} className='flex items-center gap-2'
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div className={`border rounded-full p-2 ${hover?'text-white bg-slate-400':''}`}>
              <FaShoppingCart />
            </div>
            <span className='font-semibold'>
              Giỏ hàng
            </span>
          </Link>
      </div>
    </div>
  )
}

export default Usernavbar