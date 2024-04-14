import CarouselCustom from '../components/CarouselCustom'
import banner from '../assets/images/banners/blackFriday.gif'
import ProductFrame from '../components/ProductFrame'
import ScrollButton from '../components/ScrollButton/ScrollButton'

const Home = () => {
  return (
    <div className='relative'>
      <CarouselCustom/>
      <div className='w-full mt-6 mb-10 flex justify-center'>
        <img src={banner}/>
      </div>
      <div>
        <ProductFrame/>
      </div>
      <ScrollButton /> 
    </div>
  )
}

export default Home