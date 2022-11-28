import React from "react";
import { useRouter } from "next/router";
import { MdArrowBackIosNew } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { HiUserGroup } from "react-icons/hi";
import { BsCurrencyEuro } from "react-icons/bs";
import { ImClock } from "react-icons/im";
import Event from "../../components/Event";

const ID = () => {
  const router = useRouter();
  const { eventId } = router.query;
  return (
    <div className="h-full dark:bg-gray-900 dark:text-white">
      <div className="mx-auto  p-4 pt-4 lg:max-w-[900px]">
        <div
          onClick={() => router.back()}
          className="flex w-fit cursor-pointer items-center rounded-xl px-2 py-1 hover:bg-gray-400 dark:bg-gray-700 "
        >
          <div className="mr-1 grid place-items-center ">
            <MdArrowBackIosNew />
          </div>
          <div>Back</div>
        </div>
        <div className="mt-4  rounded-3xl  bg-gradient-to-bl from-[#C53E3E] to-[#513EC5] px-3 py-6 text-white transition md:p-10">
          <div className=" font-semibold text-[#E8E8E8] ">
            Games and Activities
          </div>
          <div className="text-4xl font-bold md:text-6xl ">Poker Night </div>
          <div className="mt-2 text-lg font-semibold ">
            Hosted by Sri Harsh Amur
          </div>
          <div className="my-14 flex flex-col gap-8 tracking-wide md:flex-row">
            <div className="grid flex-1 grid-cols-[35px_minmax(40px,_60px)_1fr] grid-rows-2 items-center gap-2">
              <div className="grid place-items-center rounded-lg bg-[#EBEBEB] bg-opacity-20 p-2">
                <ImClock />
              </div>
              <div className=" font-semibold">When</div>
              <div className="">At 16:00 on 29 November </div>
              <div className="grid w-fit place-items-center rounded-lg bg-[#EBEBEB] bg-opacity-20 p-2">
                <IoLocationSharp />
              </div>
              <div className=" font-semibold">Where</div>

              <div className="">
                <div>Witbreuksweg 395 - 303</div>
                <div>Enschede, 7522ZA</div>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-[35px_35px_1fr] grid-rows-2 items-center gap-2">
              <div className="grid place-items-center rounded-lg bg-[#EBEBEB] bg-opacity-20 p-2">
                <BsCurrencyEuro />
              </div>
              <div className=" font-semibold">Fee</div>

              <div className=" "> 10 euros</div>
              <div className="grid place-items-center rounded-lg bg-[#EBEBEB] bg-opacity-20 p-2">
                <HiUserGroup />
              </div>
              <div className=" font-semibold">Max</div>
              <div className="">8 </div>
            </div>
          </div>
          <div className="flex items-center justify-around">
            <button className="w-32 cursor-pointer rounded-full bg-green-500 py-4 text-center text-xl font-bold transition md:hover:-translate-y-2 md:hover:scale-105">
              IN
            </button>
            <button className="w-32 cursor-pointer rounded-full bg-red-500 py-4 text-center text-xl font-bold  transition md:hover:-translate-y-2 md:hover:scale-105">
              OUT
            </button>
          </div>
          <div className="mt-12 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            mollitia explicabo amet sed temporibus sapiente cumque, reiciendis
            officia vitae impedit, quibusdam dolores dolorum repellendus
            quisquam, nulla beatae voluptates maiores optio?
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-4 text-center text-xl font-bold md:mb-2 md:text-left">
            More Events you might like
          </div>
          <div className=" flex flex-col items-center gap-8 md:flex-row ">
            <Event eventId={2} />
            <Event eventId={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ID;
