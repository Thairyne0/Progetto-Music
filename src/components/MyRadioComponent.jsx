import MusicCard from "./MusicCard";
import songOne from "../assets/images/2a.png";
import songTwo from "../assets/images/2b.png";
import songThree from "../assets/images/2c.png";
import songFour from "../assets/images/2d.png";
import songFive from "../assets/images/2e.png";

const MyRadioComponent = () => {
  return (
    <div>
      <a href="" className=" inline-block mt-6">
        <h2 className="font-bold text-neutral-300 text-2xl ms-6">
          Nuovi episodi radio &gt;
        </h2>
      </a>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 p-3 flex-wrap justify-center items-center">
        <MusicCard imgUrl={songOne} title={"Prólogo con Abuelo"}></MusicCard>
        <MusicCard imgUrl={songTwo} title={"The Wanderer"}></MusicCard>
        <MusicCard
          imgUrl={songThree}
          title={"Micheal Bublé & Carly Pearce"}
        ></MusicCard>
        <MusicCard
          imgUrl={songFour}
          title={"Stephan Moccio: The Zane Lowe"}
        ></MusicCard>
        <MusicCard imgUrl={songFive} title={"Chart Spotlight"}></MusicCard>
      </div>
    </div>
  );
};

export default MyRadioComponent;
