import CarouselCustom from '../components/CarouselCustom'
import banner from '../assets/images/banners/blackFriday.gif'
import ProductFrame from '../components/ProductFrame'

const Home = () => {
  return (
    <div>
      <CarouselCustom/>
      <div className='w-full mt-6 mb-10 flex justify-center'>
        <img src={banner}/>
      </div>
      <div>
        <ProductFrame/>
      </div>
    </div>
  )
}

export default Home