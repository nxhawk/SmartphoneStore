import { Link } from 'react-router-dom'
import Product from './Product'
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { filterProps } from '../pages/AllProduct';
import { IProduct } from '../types/product';
import { useQuery } from '@tanstack/react-query';
import { getAllProduct } from '../api/product/apiProduct';
import { useTranslation } from 'react-i18next';
import { IComment } from '../types/comment';

interface ProductProps {
  more?: boolean;
  title: string;
  filter?: filterProps[];
  searchValue?: string;
}

interface Product {
  name: string;
  image: string;
  price: number;
  sale: number;
  star: number;
  comment: IComment[];
}

const ProductFrame = ({ more = true, title, filter, searchValue}: ProductProps) => {
  const [t] = useTranslation("global");
  const [page, setPage] = useState(1);
  const [storePage, setStorePage] = useState(1);
  const [perPage, setperPage] = useState(more?5:10);
  const [countPage, setcountPage] = useState(0);

  const handleChangePage = (_e: React.ChangeEvent<unknown>, value: number) =>{
    setPage(value);
    changePage(value);
  } 

  const changePage=(page: number)=>{
    if (page > countPage) setPage(1);
    setPage(page);
  }

  const { isLoading, data: products} = useQuery({
    queryKey: ['products', filter, page, searchValue],
    queryFn: async () => {
      if (page === storePage) setPage(1);
      setStorePage(page);
      const data = await getAllProduct(filter, page, perPage, searchValue?searchValue:'');
      setcountPage(data.totalPage);
      setperPage(data.perPage);
      return data.products;
    },
  })


  if (isLoading) return <div>Loading..</div>

  return (
    <div className={`mt-10 border-sky-600 border-2 rounded-lg p-10 relative mb-8 ${!more?'pb-4':''}`}>
        <h3 className='text-white text-lg sm:text-2xl md:text-3xl rounded-full font-bold text-center py-1 bg-gradient-to-r from-cyan-500 to-blue-500 absolute w-full top-0 left-0 -translate-y-1/2'>{title}</h3>
        {
          more &&(
        <div className='bottom-0 left-0 translate-y-1/2 absolute w-full flex items-center py-1 rounded-full bg-stone-200 text-stone-400 ease-in-out hover:text-black hover:bg-stone-300 border-x-2 border-cyan-500
        dark:bg-slate-600 dark:hover:text-slate-800
        '>
            <Link to={'/showall'} className='text-xl font-bold text-center w-full'>
            {t('showAllProduct')}
            </Link>
        </div>
          )
        }

        {
          products.length > 0 && (
              <>
                {/* list product */}
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1'>
          {
            products.map((product: IProduct, key: number) =>
              <Product
                key={key}
                image={product.image}
                name={product.name}
                price={product.price}
                rate={product.rate}
                discount={product.discount}
                comments={product.comment?.length || 0}
                link={'/product/' + product.productId}
              />
            )
          }
        </div>
        {/* end list product */}

        {
          !more && countPage > 0 && (
            // pagination
            <div className='mt-5 flex item-center justify-center'>
              <Pagination 
                count={countPage} 
                page={page}
                color="primary" size="large" 
                onChange={handleChangePage}  
              />
            </div>
          )
        }
              </>
          )
        }
        {
          (products.length <= 0) && (
            <div>Product Empty</div>
          )
        }
        
    </div>
  )
}

export default ProductFrame