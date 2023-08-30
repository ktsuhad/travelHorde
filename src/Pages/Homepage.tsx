import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Dubai from "../assets/Dubai.jpg";
import qatar from "../assets/QatarAirways.jpg";
import Newyork from "../assets/NewYork.jpg";
import Carousel from "../Components/Carousel/Carousel";

const Homepage = () => {
  const images = [qatar, Dubai, Newyork];
  return (
    <div>
      <Navbar />
      <Carousel images={images} />
      <Footer />
    </div>
  );
};

export default Homepage;
