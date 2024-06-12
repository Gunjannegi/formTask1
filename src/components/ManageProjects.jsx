import React, { useState } from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPeopleOutline } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";

export const ManageProjects = ({ setAllDetails, allDetails }) => {
  const [selectedOption, setSelectedOption] = useState(allDetails.managedby);
  
   //Function to track which option is selected
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setAllDetails((prevDetails) => ({
      ...prevDetails,
      managedby: option,
    }));
  };

  return (
    <div className="m-7">
      <h1 className="text-center font-bold text-lg">Who can manage projects</h1>
      <p className="align-middle text-center text-sm text-gray-400 mb-8">
        Don't panic - You can also customize these types in settings
      </p>
      <div
        className={`flex items-center border rounded-md p-2 gap-6 mb-4 cursor-pointer ${
          selectedOption === "everyone"
            ? "border-2 border-blue-400"
            : "hover:outline-none hover:border-2 hover:border-blue-400"
        }`}
        onClick={() => handleOptionClick("everyone")}
      >
        <FaPeopleGroup size={40} color="gray" />
        <div>
          <h1 className="font-semibold">Everyone</h1>
          <p className="text-gray-400 text-sm">
            All users can now see it, but guests cannot access the projects.
          </p>
        </div>
      </div>
      <div
        className={`flex items-center border rounded-md p-2 gap-6 mb-4 cursor-pointer ${
          selectedOption === "admins"
            ? "border-2 border-blue-400"
            : "hover:outline-none hover:border-2 hover:border-blue-400"
        }`}
        onClick={() => handleOptionClick("admins")}
      >
        <MdPeopleOutline size={40} color="gray" />
        <div>
          <h1 className="font-semibold">Only Admin's</h1>
          <p className="text-gray-400 text-sm">
            Only admins can manage everything.
          </p>
        </div>
      </div>
      <div
        className={`flex items-center border rounded-md p-2 gap-6 cursor-pointer ${
          selectedOption === "specific"
            ? "border-2 border-blue-400"
            : "hover:outline-none hover:border-2 hover:border-blue-400"
        }`}
        onClick={() => handleOptionClick("specific")}
      >
        <IoPersonCircleOutline size={40} color="gray" />
        <div>
          <h1 className="font-semibold">Only to Specific people</h1>
          <p className="text-gray-400 text-sm">
            Only some specific people can see it.
          </p>
        </div>
      </div>
    </div>
  );
};
