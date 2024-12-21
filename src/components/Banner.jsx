import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../assets/Img1.jpg';
import Img2 from '../assets/Img2.jpg';
import Img3 from '../assets/Img3.jpg';
import Img4 from '../assets/Img4.jpg';
import Img5 from '../assets/Img5.jpg';
export default function Banner() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,          
    autoplaySpeed: 3000, 
  };
  return (
    <div className="w-full bg-CharcoalGreen">
    <div className="container w-11/12 mx-auto">
      <div className="slider-container">
      <Slider {...settings}>
        <div className="overflow-hidden rounded-2xl">
          <img src={Img1} className="sliderImg"/>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img src={Img2} className="sliderImg"/>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img src={Img3} className="sliderImg"/>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img src={Img4} className="sliderImg"/>
        </div>
        <div className="overflow-hidden rounded-2xl">
          <img src={Img5} className="sliderImg"/>
        </div>
      
      </Slider>
    </div>
    </div>
    </div>
  )
}
