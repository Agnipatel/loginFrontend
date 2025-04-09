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
            src="https://videos.pexels.com/video-files/31069060/13277245_2560_1440_60fps.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            src="https://videos.pexels.com/video-files/15911968/15911968-uhd_2560_1440_25fps.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </SwiperSlide>
        <SwiperSlide>
          <video
            src="https://videos.pexels.com/video-files/18458586/18458586-hd_1920_1080_30fps.mp4"
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
