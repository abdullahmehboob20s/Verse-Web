import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="flex items-center space-x-2 justify-between">
      <button
        ref={prevRef}
        className="fs-32px disabled:opacity-50 transition-all duration-300"
      >
        <IoIosArrowBack />
      </button>
      {/* <div className="flex relative w-full min-w-full"> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation]}
        className="grid min-slider"
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (swiper.params) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
      >
        <SwiperSlide>
          <video
            className="rounded w-full"
            src="images/nft-video.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
        </SwiperSlide>
        <SwiperSlide>
          <video
            className="rounded w-full"
            src="images/nft-video.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
      <button
        ref={nextRef}
        className="fs-32px disabled:opacity-50 transition-all duration-300"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default Slider;
