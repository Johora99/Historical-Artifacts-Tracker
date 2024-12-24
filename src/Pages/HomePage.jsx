import Artifacts from "../components/Artifacts";
import Banner from "../components/Banner";
import BecomeAMember from "../components/BecomeAMember";
import Counter from "../components/Counter";
import UpComingArtifacts from "../components/UpComingArtifacts";


export default function HomePage() {
  return (
    <div className="w-full bg-CharcoalGreen overflow-hidden">
      <Banner></Banner>
      <Artifacts></Artifacts>
      <Counter></Counter>
      <BecomeAMember></BecomeAMember>
      <UpComingArtifacts></UpComingArtifacts>
    </div>
  )
}
