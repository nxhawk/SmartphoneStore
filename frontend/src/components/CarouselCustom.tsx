import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner0 from '../assets/images/banners/banner0.gif'
import banner1 from '../assets/images/banners/banner1.png'
import banner2 from '../assets/images/banners/banner2.png'
import banner3 from '../assets/images/banners/banner3.png'
import banner4 from '../assets/images/banners/banner4.png'
import banner5 from '../assets/images/banners/banner5.png'
import banner6 from '../assets/images/banners/banner6.png'
import banner7 from '../assets/images/banners/banner7.png'
import banner8 from '../assets/images/banners/banner8.png'

const CarouselCustom = () => {
  return (
    <Carousel 
      className="mt-2" 
      showThumbs={false} 
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      interval={3000}
      swipeable={true}
      showArrows={false}
    >
      <div className="w-9/12 mx-auto">
        <img src={banner0}  className="object-cover"/>
      </div>
      <div className="w-9/12 mx-auto">
        <img src={banner1}  className="object-cover"/>
      </div>
      <div className="w-9/12 mx-auto">
        <img src={banner2}  className="object-cover"/>
      </div>
      <div className="w-9/12 mx-auto">
        <img src={banner3}  className="object-cover"/>
      </div>
      <div className="w-9/12 mx-auto">
        <img src={banner4}  className="object-cover"/>
      </div>
      <div className="w-9/12 mx-auto">
        <img src={banner5}  className="object-cover"/>
      </div>
      <div className="w-9/12 mx-auto">
        <img src={banner6}  className="object-cover"/>
      </div>
      <div className="w-9/12 mx-auto">
        <img src={banner7}  className="object-cover"/>
      </div>
      <div className="w-9/12 mx-auto">
        <img src={banner8}  className="object-cover"/>
      </div>

    </Carousel>
  )
}

export default CarouselCustom