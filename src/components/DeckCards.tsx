import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Event from "./Event";
import { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

const DeckCards = () => {
  return (
    <Swiper modules={[EffectCards]} effect={"cards"} grabCursor={true}>
      {Array.from(Array(20).keys()).map((i: number) => (
        <SwiperSlide key={i}>
          <Event eventId={i} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DeckCards;
