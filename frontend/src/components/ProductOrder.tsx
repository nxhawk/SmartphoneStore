import { Link } from 'react-router-dom'
import phone from '../assets/images/products/oppo-a3s-32gb-600x600.jpg'
import { convertToVND } from '../utils/helper'
import { RiSubtractFill } from "react-icons/ri";
import { HiOutlinePlusSm } from "react-icons/hi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useState } from 'react';
import { IProduct } from '../types/product';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { changeProductFromCart } from '../api/cart/apiCart';
import { AxiosError } from 'axios';
import { ServerError } from '../types/global';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

interface Props {
  product: IProduct;
  quantity: number;
  remove:  UseMutationResult<string, AxiosError<unknown, string>, number, unknown>
}

const ProductOrder = ({ product, quantity, remove }: Props) => {
  const [numberProduct, setNumberProduct] = useState<number>(quantity);

  const changeProductNumberCartMutation = useMutation({
    mutationFn: async ({productId, value}:{productId: number, value: number}) => changeProductFromCart (productId, value),
    onError: (error: AxiosError) =>{
      if (error.response){
        const errorMessage = error.response.data as ServerError;
        toast.error(errorMessage.message || "Server error");
      } else{
        toast.error('Server error');
      }
    },
    onSuccess: (data) => {
      setNumberProduct(data.quantity);
    }
  })
  
  const changeNumberProduct = (cnt: number) => {
    changeProductNumberCartMutation.mutate({
      productId: product.productId,
      value: cnt,
    });
  }

  const handleDeleteProduct = () =>{
    confirmAlert({
      title: 'Confirm delete product',
      message: 'Are you sure to remove from cart.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => 
            remove.mutate(product.productId)
        },
        {
          label: 'No',
        }
      ]
    });
  }
  return (
    <div className="border-b border-gray-800 p-2 mb-3 flex items-center gap-1 hover:bg-gray-200">
      <Link to={'/product/1'} className='flex items-center gap-1 w-8/12'>
        <img src={product.image || phone} alt="image}" className='w-14 h-14'/>
        <div className='flex max-w-full text-wrap h-full items-start flex-col justify-between truncate'>
          <p className='truncate max-w-full'>{product.name}</p>
          <div className='flex gap-4 mt-2 flex-wrap'>
            <p className='text-red-600 font-semibold'>{convertToVND(product.price * (100 - product.discount)/100)}</p>
            <s className='text-gray-700'>{convertToVND(product.price)}</s>
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
        <button className='px-3 py-1 rounded flex items-center justify-center text-center hover:bg-gray-300 text-red-500 hover:text-red-600'
        onClick={handleDeleteProduct}
        >
          <BsFillTrash3Fill className='text-xl'/>
        </button>
      </div>
    </div>
  )
}

export default ProductOrder