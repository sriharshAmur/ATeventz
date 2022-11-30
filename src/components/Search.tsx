import React, { useState } from "react";
// import Select, { ActionMeta } from "react-select";

// interface LocationOptions {
//   value: string;
//   label: string;
// }

// const locationOptions: readonly LocationOptions[] = [
//   { value: "Enschede", label: "Enschede" },
//   { value: "Hengelo", label: "Hengelo" },
//   { value: "Amsterdam", label: "Amsterdam" },
//   { value: "Den Hague", label: "Den Hague" },
//   { value: "Rotterdam", label: "Rotterdam" },
// ];

// const locationDefaultValue: LocationOptions = {
//   value: "Anywhere",
//   label: "anywhere",
// };

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState(new Date().toDateString());
  const [category, setCategory] = useState("");
  // const [kmsAway, setKmsAway] = useState("");

  return (
    <div className="relative w-7/12">
      <div className="rounded border-2 border-gray-600 px-8 py-8 dark:border-gray-300">
        <div className="min-w-200px mx-auto mb-8 w-2/3">
          <input
            className="w-full rounded-xl border-2 border-gray-600 px-4 py-2 outline-none dark:border-gray-300 dark:bg-gray-900 dark:text-white"
            value={searchTerm}
            placeholder="Search for events"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="mx-auto flex w-fit items-start justify-center gap-12  ">
          <div>
            <div className="text-lg ">Location</div>
            <div className="">
              {/* <Select
                defaultValue={locationDefaultValue}
                onChange={handleChangeLocation}
                isClearable={true}
                options={locationOptions}
                // className=" bg-gray-900 text-white"
                // styles={{
                //   control: (provided) => ({
                //     ...provided,
                //     border: "2px solid red",
                //     backgroundColor: "transparent",
                //     boxShadow: "none",
                //   }),
                // }}
              /> */}
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=" w-52 rounded border-2 border-black bg-transparent p-2 text-lg outline-0 dark:border-gray-300"
              >
                <option value="">Any</option>
                <option value="Enschede">Enschede</option>
                <option value="Hengelo">Hengelo</option>
                <option value="Amsterdam">Amsterdam</option>
                <option value="Den Hague">Den Hague</option>
                <option value="Rotterdam">Rotterdam</option>
              </select>
            </div>
            {/* <div className="text-sm">
              <div className="mt-2 text-gray-700 dark:text-gray-300">
                Less than {kmsAway !== "" && kmsAway + " Kms away"}
              </div>
              <div className="mt-1 flex items-center gap-4 ">
                <div
                  onClick={() => setKmsAway((kms) => (kms === "5" ? "" : "5"))}
                  className={`cursor-pointer rounded-lg border-2 ${
                    kmsAway === "5"
                      ? "bg-[#EBEBEB] dark:text-black"
                      : "border-[#EBEBEB] hover:bg-gray-300 dark:text-white hover:dark:bg-gray-600"
                  }  px-2 py-1 `}
                >
                  5
                </div>
                <div
                  onClick={() =>
                    setKmsAway((kms) => (kms === "10" ? "" : "10"))
                  }
                  className={`cursor-pointer rounded-lg border-2 ${
                    kmsAway === "10"
                      ? "bg-[#EBEBEB] dark:text-black"
                      : "border-[#EBEBEB] hover:bg-gray-300 dark:text-white hover:dark:bg-gray-600"
                  }  px-2 py-1 `}
                >
                  10
                </div>
                <div
                  onClick={() =>
                    setKmsAway((kms) => (kms === "15" ? "" : "15"))
                  }
                  className={`cursor-pointer rounded-lg border-2 ${
                    kmsAway === "15"
                      ? "bg-[#EBEBEB] dark:text-black"
                      : "border-[#EBEBEB] hover:bg-gray-300 dark:text-white hover:dark:bg-gray-600"
                  }  px-2 py-1 `}
                >
                  15
                </div>
              </div>
            </div> */}
          </div>
          <div>
            <div className="text-lg ">Category</div>
            <div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounde1 w-52 border-2 border-black bg-transparent p-2 text-lg outline-0 dark:border-gray-300"
              >
                <option value="">Any</option>
                <option value="Music">Music</option>
                <option value="Sports">Sports</option>
                <option value="Food">Food</option>
                <option value="Art">Art</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          {/* <div>
            <div className="text-lg ">Date</div>
            <div>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-44 border-2 border-black bg-transparent p-2 text-lg dark:border-gray-300"
              />
            </div>
          </div> */}
        </div>
        <div className="mx-auto mt-6 w-fit">
          <button className=" rounded-xl border-2 px-6 py-2">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
