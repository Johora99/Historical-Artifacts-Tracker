import { useEffect, useState } from "react"
import GalleryCard from "./GalleryCard";
import { motion } from "motion/react"
import AOS from "aos";
import "aos/dist/aos.css";
export default function OurGallery() {
const [categories,setCategories] = useState([]);
const [data,setData] = useState([]);
const [categoryData,setCategoryData] = useState([]);
const [activeCategory, setActiveCategory] = useState("All Artifacts");
useEffect(() => {
  const categoryData = async () => {
    try {
      const response = await fetch('/category.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  categoryData();
}, []);
useEffect(() => {
  const categoryData = async () => {
    try {
      const response = await fetch('/data.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
      setCategoryData(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  categoryData();
}, []);

  const selectedCategory = (type)=>{
    setActiveCategory(type);
  if (type === 'All Artifacts') {
    setCategoryData(data); 
  } else {
      const filter = data.filter(item => item.category === type);
      setCategoryData(filter);
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container w-11/12 mx-auto">
      <div className="mb-20">
        <motion.h2 data-aos="fade-right" animate={{ color:['rgb(20, 133, 135)','#fff','rgb(20, 133, 135)']}} 
        transition={{duration:2, repeat:Infinity}}
        
        className="text-4xl lg:text-6xl text-white font-semibold text-center mb-5">Our Gallery</motion.h2>
        <p data-aos="fade-left" className="lg:w-[65%] mx-auto text-center text-LightGray">Our collection has just been enriched with a fascinating array of newly discovered artifacts. Each piece tells a unique story of human history, from tools that shaped civilizations to cultural treasures that inspire wonder. Explore these recent additions and take a journey through time as we unveil the latest pieces in our archive.</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-5">
        {
          categories.map((item,index)=> <button data-aos="zoom-in"
            onClick={() => selectedCategory(item.category)}
            key={item.id}
            className={`text-TealBlueGreen px-4 py-2 rounded-lg font-medium ${
              activeCategory === item.category
                ? "activeNav"
                : "navLink"
            }`}
          >
            {item.category}
          </button>)
        }
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-20">
        {
          categoryData.map((item,index) =><GalleryCard key={index} item={item}></GalleryCard>)
        }
      </div>
    </div>
  )
}
