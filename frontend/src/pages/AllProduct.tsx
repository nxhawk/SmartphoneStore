import ProductFrame from '../components/ProductFrame'
import Brands from '../components/Brands'

const AllProduct = () => {
  return (
    <div className='mt-10'>
      <Brands/>
      <ProductFrame title='* SẢN PHẨM TÌM KIẾM THEO YÊU CẦU *' more={false}/>
    </div>
  )
}

export default AllProduct