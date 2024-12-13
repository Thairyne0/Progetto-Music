import imgOne from "../assets/images/1a.png";
import imgTwo from "../assets/images/1b.png";
import imgThree from "../assets/images/1c.png";

const MyCarousel = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 p-4">
      <img src={imgOne} alt="album" className="rounded-lg" />
      <img
        src={imgTwo}
        alt="album"
        className=" hidden sm:inline-block rounded-lg"
      />
      <img
        src={imgThree}
        alt="album"
        className=" hidden md:inline-block rounded-lg"
      />
    </div>
  );
};

export default MyCarousel;
