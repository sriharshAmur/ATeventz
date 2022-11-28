import React from "react";

const Footer = () => {
  return (
    <div className=" border-t-2 border-gray-50 px-8 py-4 dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto mt-4">
        <div className="flex items-start justify-between">
          <div>
            <div className="mb-3 text-lg font-bold">Events</div>
            <div className="flex flex-col gap-1">
              <div>View Events</div>
              <div>Host Events</div>
              <div>Your Upcoming Events</div>
            </div>
          </div>

          <div>
            <div className="mb-3 text-lg font-bold">Choose By Category</div>
            <div className="flex flex-col gap-1">
              <div>Sports</div>
              <div>Parties</div>
              <div>Activities</div>
              <div>Music</div>
              <div>Hobbies</div>
            </div>
          </div>

          <div>
            <div className="mb-3 text-lg font-bold">Choose By Location</div>
            <div className="flex flex-col gap-1">
              <div>Enschede</div>
              <div>Hengelo</div>
              <div>Almelo</div>
              <div>Amsterdam</div>
              <div>Rotterdam</div>
            </div>
          </div>

          <div>
            <div className="mb-3 text-lg font-bold">Company</div>
            <div className="flex flex-col gap-1">
              <div>About</div>
              <div>How it works?</div>
              <div>FAQ</div>
              <div>Careers</div>
              <div>Support</div>
            </div>
          </div>
        </div>
        <div className="my-6 flex items-center justify-between">
          <div className=" text-2xl font-bold">AtEventz</div>

          <div className=" text-center">&copy; Copyright 2022 AtEventz</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
