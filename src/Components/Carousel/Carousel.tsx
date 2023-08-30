// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Button } from "@mui/material";
interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      spaceBetween={20} // Adjust as needed
      slidesPerView={1} // Show one slide at a time
      autoplay={{ delay: 4000 }} // Autoplay with 3 seconds delay
      className="h-[500px] container mx-auto my-10 rounded-lg" // Adjust height using Tailwind CSS classes
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="">
          <div className="absolute inset-0 p-4 text-white bg-black/25  bg-opacity-60">
            <h1 className="text-4xl font-extrabold mb-2 py-4">Fly with Us</h1>
            <p className="text-lg  font-medium">
              Explore our wide range of flight options to your dream
              destinations.
              <br />
              Book your tickets now and enjoy a seamless travel experience.
              <br />
            </p>
            <Button
              variant="contained"
              sx={{
                marginTop: "200px",
                marginLeft: "20px",
                backgroundColor: "#f97316",
              }}
            >
              Book Now
            </Button>
          </div>
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
