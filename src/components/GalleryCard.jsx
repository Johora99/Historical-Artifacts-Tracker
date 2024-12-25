

export default function GalleryCard({item}) {
  return (
    <div className="bg-DeepSeaGreen p-5 relative group">
       <img src={item.image} alt="" className="w-full h-52 object-cover"/>
       <div className="absolute top-0 left-0 bg-DeepSeaGreen bg-opacity-[0.5] z-20 w-0 h-full hidden group-hover:block group-hover:w-full transition-all duration-500">
         <div className="hidden group-hover:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 delay-1000">
          <p className="text-TealBlueGreen text-xl font-medium">{item.artifact_name}</p>
         </div>
       </div>
    </div>
  )
}
