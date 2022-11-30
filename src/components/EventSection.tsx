import React, { useState } from "react";
import type SwiperType from "swiper";
import SwipeCards from "./SwipeCards";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const EventSection = ({ type }: { type: string }) => {
  const [swiper, setSwiper] = useState<SwiperType>(
    null as unknown as SwiperType
  );
  return (
    <div className="mx-4 mt-2 mb-4 md:mx-0 md:mt-10">
      <div className="flex items-center justify-between border-b-2 border-gray-300 pb-1 md:mb-4 ">
        <div className="text-2xl font-bold">{type} Eventz</div>
        <div className="hidden items-center lg:flex">
          <div className=" mr-4 mb-2 flex items-center gap-4">
            <button
              className="hover:bg-blue cursor-pointer rounded-3xl bg-gray-200 p-2 hover:bg-gray-400 dark:bg-gray-500 hover:dark:bg-gray-100 hover:dark:text-black"
              onClick={() => swiper.slidePrev()}
            >
              <MdArrowBackIosNew size={20} />
            </button>
            <button
              className="cursor-pointer rounded-3xl bg-gray-200 p-2 hover:bg-gray-400 dark:bg-gray-500 hover:dark:bg-gray-100 hover:dark:text-black"
              onClick={() => swiper.slideNext()}
            >
              <MdArrowForwardIos size={20} />
            </button>
          </div>
          <div className="mr-2 cursor-pointer rounded-lg border-0 bg-blue-900 px-2 py-1 text-white hover:bg-blue-700  ">
            View More
          </div>
        </div>
      </div>
      <SwipeCards setSwiper={setSwiper} />
    </div>
  );
};

export default EventSection;
