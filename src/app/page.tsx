import HeroSlider from "./component/HeroSlider";
import Intro from "./component/Intro";

export default function Home()
{
  return (
    <main className="tm-homepage">
      <div className="tm-container">
        <HeroSlider />
        <Intro heading="Our Main Event" />
      </div>
    </main>
  )
}