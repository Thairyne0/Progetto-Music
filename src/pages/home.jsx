import MyCarousel from "../components/MyCarousel";
import MyExplorer from "../components/MyExplorer";
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
        <MyExplorer></MyExplorer>
      </div>
    </div>
  );
};

export default home;
