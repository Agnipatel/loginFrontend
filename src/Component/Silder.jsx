import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const SliderPage = () => {
  return (
    <div className="w-screen h-[500px]"> {/* Full width, no padding */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="w-full h-full"
      >
        <SwiperSlide>
          <video
            src="https://uptourism.gov.in/videos/tourism_vedio_140425.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </SwiperSlide>
        
      
      </Swiper>
    </div>
  );
};

export default SliderPage;
