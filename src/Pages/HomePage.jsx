import Artifacts from "../components/Artifacts";
import Banner from "../components/Banner";
import BecomeAMember from "../components/BecomeAMember";
import Counter from "../components/Counter";
import OurGallery from "../components/OurGallery";
import UpComingArtifacts from "../components/UpComingArtifacts";
import Testimonials from '../components/Testimonials'
import { useEffect } from "react";

export default function HomePage() {
     useEffect(() => {
    document.title = "LiQuest || Home Page";
  }, []);
  return (
    <div className="w-full bg-CharcoalGreen overflow-hidden">
      <Banner></Banner>
      <Artifacts></Artifacts>
      <Counter></Counter>
      <BecomeAMember></BecomeAMember>
      <UpComingArtifacts></UpComingArtifacts>
      <OurGallery></OurGallery>
      <Testimonials></Testimonials>
    </div>
  )
}
