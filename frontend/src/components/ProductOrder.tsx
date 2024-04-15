import { Link } from 'react-router-dom'
import phone from '../assets/images/products/oppo-a3s-32gb-600x600.jpg'
import { convertToVND } from '../utils/helper'
import { RiSubtractFill } from "react-icons/ri";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from 'react';

const ProductOrder = () => {
  const [numberProduct, setNumberProduct] = useState<number>(5);
  const changeNumberProduct = (cnt: number) => {
    if (numberProduct <= 1 && cnt < 0) return;
    if (numberProduct >= 50 && cnt > 0) return;

    setNumberProduct(numberProduct + cnt);
  }
  return (
    <div className="border-b border-gray-800 p-2 mb-3 flex items-center gap-1 hover:bg-gray-200">
      <Link to={'/product/1'} className='flex items-center gap-1 w-8/12'>
        <img src={phone} alt="image}" className='w-14 h-14'/>
        <div className='flex max-w-full text-wrap h-full items-start flex-col justify-between truncate'>
          <p className='truncate max-w-full'>Điện thoại Samsung Galaxy S23+ 5G 256GB 1 asd fdsf sdfds sdsad asdsdadad adasda adsada adsadsad asdsadsad asdsadsa </p>
          <div className='flex gap-4 mt-2 flex-wrap'>
            <p className='text-red-600 font-semibold'>{convertToVND(12345680)}</p>
            <s className='text-gray-700'>{convertToVND(15345680)}</s>
          </div>
        </div>
      </Link>
      <div className='flex-1 flex flex-wrap-reverse gap-2 items-center justify-center'>
        <div className='flex'>
          <button className='shadow px-2 rounded-l flex items-center justify-center text-center hover:bg-gray-300'
          onClick={() => changeNumberProduct(-1)}
          ><RiSubtractFill /></button>
          <div className='cursor-default outline-none shadow px-1 text-center w-10' 
          >{numberProduct}</div>
          <button className='shadow px-2 rounded-r flex items-center justify-center text-center hover:bg-gray-300'
          onClick={() => changeNumberProduct(1)}
          ><HiOutlinePlusSm /></button>
        </div>
        <button className='px-3 py-1 rounded flex items-center justify-center text-center hover:bg-gray-300 text-red-500 hover:text-red-600'>
          <BsFillTrash3Fill className='text-xl'/>
        </button>
      </div>
    </div>
  )
}

export default ProductOrder