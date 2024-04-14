import { Link } from 'react-router-dom'
import Product from './Product'
import phones from "../constants/phone.json"

const ProductFrame = () => {
  return (
    <div className='border-sky-600 border-2 rounded-lg p-10 relative mb-10'>
        <h3 className='text-white text-3xl rounded-full font-bold text-center py-1 bg-gradient-to-r from-cyan-500 to-blue-500 absolute w-full top-0 left-0 -translate-y-1/2'>* SẢN PHẨM MỚI *</h3>
        <div className='bottom-0 left-0 translate-y-1/2 absolute w-full flex items-center py-1 rounded-full bg-stone-200 text-stone-400 ease-in-out hover:text-black hover:bg-stone-300 border-x-2 border-cyan-500'>
        
        <Link to={'/'} className='text-xl font-bold text-center w-full'>
          Xem tất cả các sản phẩm
        </Link>

        </div>

        {/* list product */}
        <div className='grid grid-cols-5'>
          {
            phones["phones"].map((product, key) =>
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
    </div>
  )
}

export default ProductFrame