import Artifacts from "../components/Artifacts";
import Banner from "../components/Banner";
import Counter from "../components/Counter";


export default function HomePage() {
  return (
    <div className="w-full bg-CharcoalGreen overflow-hidden">
      <Banner></Banner>
      <Artifacts></Artifacts>
      <Counter></Counter>
    </div>
  )
}
