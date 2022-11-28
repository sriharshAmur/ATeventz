import React from "react";
import { ImClock } from "react-icons/im";
import { IoLocationSharp } from "react-icons/io5";
import { BsCurrencyEuro } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import Link from "next/link";

const Event = ({ eventId }: { eventId: number }) => {
  return (
    <Link href={`/events/${eventId}`}>
      <div className="mt-2 min-w-[200px] cursor-pointer rounded-[40px] bg-gradient-to-bl  from-[#C53E3E] to-[#513EC5] p-10 text-white transition lg:hover:-translate-y-2">
        <div>
          <div>
            <div className="mb-1 text-sm font-semibold tracking-wide text-[#E8E8E8]">
              Games and Activities
            </div>
            <div className="text-4xl font-bold ">Poker Night</div>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <div className="grid place-items-center rounded-lg bg-[#EBEBEB] bg-opacity-20 p-2">
              <ImClock />
            </div>
            <div className=" font-semibold">16:00, 29 Nov</div>
          </div>
          <div className="mt-8 flex items-center gap-2">
            <div className="grid place-items-center rounded-lg bg-[#EBEBEB] bg-opacity-20 p-2">
              <IoLocationSharp />
            </div>
            <div className=" font-semibold">Wibreuksweg 395, Enschede</div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex flex-1 items-center gap-2">
              <div className="grid place-items-center rounded-lg bg-[#EBEBEB] bg-opacity-20 p-2">
                <BsCurrencyEuro />
              </div>
              <div className=" font-semibold">10</div>
            </div>
            <div className="flex flex-1 items-center gap-2">
              <div className="grid place-items-center rounded-lg bg-[#EBEBEB] bg-opacity-20 p-2">
                <HiUserGroup />
              </div>
              <div className=" font-semibold">7</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Event;
