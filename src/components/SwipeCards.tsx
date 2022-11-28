import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import Event from "./Event";

const SwipeCards = ({
  setSwiper,
}: {
  setSwiper: (swiper: SwiperType) => void;
}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <div className=" py-4 px-2">
      <Swiper
        spaceBetween={50}
        slidesPerView={isMobile ? 1 : 4}
        loop={true}
        onSlideChange={(e) => console.log("slide change", e)}
        onSwiper={(swipper) => setSwiper(swipper)}
      >
        {Array.from(Array(20).keys()).map((i: number) => (
          <SwiperSlide key={i}>
            <Event eventId={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipeCards;
