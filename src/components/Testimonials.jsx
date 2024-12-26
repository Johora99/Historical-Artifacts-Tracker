import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgImg from '../assets/home6-trending-jobs-bg.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "motion/react"
export default function Testimonials() {
  const [clintData, setClintData] = useState([]);


  useEffect(() => {
    fetch("/clints.json")
      .then((res) => res.json())
      .then((data) => setClintData(data.client_satisfaction))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  const settings = {
    dots: false, 
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    fade: true, 
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className="w-full  pt-20">

      <div className="container w-11/12 mx-auto text-center">
      <motion.h2 animate={{ color:['rgb(20, 133, 135)','#fff','rgb(20, 133, 135)']}} 
        transition={{duration:2, repeat:Infinity}}
        
        className="text-4xl lg:text-6xl text-white font-semibold text-center mb-5">Testimonials</motion.h2>
        <p className="text-2xl font-semibold text-TealBlueGreen mt-3">
          Clients Say
        </p>
      </div>
      <div className="border-b-[2px] border-TealBlueGreen w-[40%] mx-auto mt-5"></div>


      <div
        className="h-[500px] my-20 relative"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <Slider {...settings} className="h-full">
          {clintData?.map((clint, index) => (
            <div key={index} className="flex justify-center items-center h-full">
              <div className="text-center">
                <img
                  src={clint.image}
                  alt={clint.name}
                  className="w-24 h-24 lg:w-32 lg:h-32 rounded-full mx-auto mt-10"
                />
                <p
                  data-aos="zoom-in"
                  className="text-2xl lg:text-3xl font-semibold text-TealBlueGreen mt-3"
                >
                  {clint.name}
                </p>
                <p
                  data-aos="zoom-in"
                  className="text-lg lg:text-xl text-LightGray font-medium my-3"
                >
                  {clint.location}
                </p>
                <p
                  data-aos="zoom-in"
                  className="text-xl lg:text-2xl text-white mx-auto w-[80%] lg:w-[50%]"
                >
                  {clint.feedback}
                </p>
                <div>
                  <p className="text-base text-LightGray my-2">
                     {clint.date}
                  </p>
                  <div className="rating flex justify-center mt-2">
                    {[...Array(5)].map((_, idx) => (
                      <span
                        key={idx}
                        className={`mask mask-star-2 bg-orange-400 ${
                          idx < clint.rating ? "opacity-100" : "opacity-50"
                        }`}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
