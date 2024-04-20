import CarouselCustom from '../components/CarouselCustom'
import banner from '../assets/images/banners/blackFriday.gif'
import ProductFrame from '../components/ProductFrame'
import ScrollButton from '../components/ScrollButton/ScrollButton'
import DocumentMeta from 'react-document-meta'
import { HomeMeta } from '../utils/meta'

const Home = () => {
  return (
    <DocumentMeta {...HomeMeta}>
      <div className='relative'>
        <CarouselCustom/>
        <div className='w-full mt-6 mb-10 flex justify-center'>
          <img src={banner}/>
        </div>
        <div>
          <ProductFrame title='* SẢN PHẨM MỚI *'/>
        </div>
        <ScrollButton /> 
      </div>
    </DocumentMeta>
  )
}

export default Home