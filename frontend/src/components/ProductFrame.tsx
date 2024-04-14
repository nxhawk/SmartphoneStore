import { Link } from 'react-router-dom'
import Product from './Product'
import phones from "../constants/phone.json"
import Pagination from '@mui/material/Pagination';
import { useEffect, useState } from 'react';

interface ProductProps {
  more?: boolean;
  title: string;
}

interface Product {
  name: string;
  image: string;
  price: number;
  sale: number;
  star: number;
  comments: number;
}

const ProductFrame = ({ more = true, title }: ProductProps) => {
  const [page, setPage] = useState(1);
  const [perPage, setperPage] = useState(10);
  const [products, setProducts] = useState<Product[]>([]);
  const [countPage, setcountPage] = useState(0);

  const handleChangePage = (e: React.ChangeEvent<unknown>, value: number) =>{
    setPage(value);
    changePage(value, perPage);
  } 

  const changePage=(page: number, perPage: number)=>{
    const from = (page - 1) * perPage;
    const to = Math.min(phones["phones"].length, page * perPage);
    setProducts(phones["phones"].slice(from, to))
  }

  useEffect(() =>{
    const pageCount = Math.floor(phones["phones"].length / perPage) + (phones["phones"].length % perPage > 0?1:0);
    setcountPage(pageCount);
    changePage(1, perPage);
  },[])

  return (
    <div className={`mt-10 border-sky-600 border-2 rounded-lg p-10 relative mb-10 ${!more?'pb-4':''}`}>
        <h3 className='text-white text-3xl rounded-full font-bold text-center py-1 bg-gradient-to-r from-cyan-500 to-blue-500 absolute w-full top-0 left-0 -translate-y-1/2'>{title}</h3>
        {
          more &&(
        <div className='bottom-0 left-0 translate-y-1/2 absolute w-full flex items-center py-1 rounded-full bg-stone-200 text-stone-400 ease-in-out hover:text-black hover:bg-stone-300 border-x-2 border-cyan-500'>
            <Link to={'/showall'} className='text-xl font-bold text-center w-full'>
              Xem tất cả các sản phẩm
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
            products.map((product, key) =>
              <Product
                key={key}
                image={product.image}
                name={product.name}
                sale={product.sale}
                price={product.price}
                comments={product.comments}
                star={product.star}
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
          products.length <= 0 && (
            <div>Product Empty</div>
          )
        }
        
    </div>
  )
}

export default ProductFrame