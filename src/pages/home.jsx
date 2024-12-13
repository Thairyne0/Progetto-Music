import MyCarousel from "../components/MyCarousel";
import MyQueryGallery from "../components/MyQueryGallery";
import MyRadioComponent from "../components/MyRadioComponent";

const home = () => {
  return (
    <div>
      <div>
        <MyCarousel></MyCarousel>
      </div>
      <div>
        <MyRadioComponent></MyRadioComponent>
        <MyQueryGallery></MyQueryGallery>
      </div>
    </div>
  );
};

export default home;
