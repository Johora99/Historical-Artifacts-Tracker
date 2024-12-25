import { useEffect, useState } from "react"
import GalleryCard from "./GalleryCard";


export default function OurGallery() {
const [categories,setCategories] = useState([]);
const [data,setData] = useState([]);
const [categoryData,setCategoryData] = useState([]);
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
  if (type === 'All Artifacts') {
    setCategoryData(data); 
  } else {
      const filter = data.filter(item => item.category === type);
      setCategoryData(filter);
    }
  }
  return (
    <div className="container w-11/12 mx-auto">
      <div className="flex items-center justify-center gap-5">
        {
          categories.map((item,index)=><button onClick={()=>selectedCategory(item.category)} className="text-TealBlueGreen " key={item.id}>{item.category}</button>)
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
