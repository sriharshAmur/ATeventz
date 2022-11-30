import React from "react";
import { useRouter } from "next/router";

const Events = () => {
  const router = useRouter();
  const { locationParam, categoryParam, dateParam, searchTermParam } =
    router.query;
  // make a state for each of the router query params

  const [location, setLocation] = React.useState(locationParam ?? "");
  const [category, setCategory] = React.useState(categoryParam ?? "");
  const [date, setDate] = React.useState(dateParam ?? "");
  const [searchTerm, setSearchTerm] = React.useState(searchTermParam ?? "");

  return (
    <div className="h-full dark:bg-gray-900 dark:text-white">
      <div className="mx-auto  p-4 pt-4 lg:max-w-[900px]">
        <div className="mx-auto flex items-center gap-4">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-2/3 rounded-xl px-4 py-2"
            placeholder="Search for events"
          />
          <div>Search</div>
        </div>
      </div>
    </div>
  );
};

export default Events;
