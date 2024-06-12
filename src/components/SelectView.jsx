import { useState } from "react";
import { CiViewList } from "react-icons/ci";
import { MdTableChart } from "react-icons/md";
export const SelectView = ({ setAllDetails, allDetails }) => {
  const [selectedView, setSelectedView] = useState(allDetails.view); 
  
  //Function to track which option is selected
  const handleClick = (view) => {
    setSelectedView(view);
    setAllDetails((prevDetails) => ({
      ...prevDetails,
      view: view,
    }));
  };
  return (
    <div className="m-7 ">
      <h1 className="text-center font-bold text-lg">Select a view</h1>
      <p className="align-middle text-center text-sm text-gray-400 mb-8">
        You can also customize this views in settings
      </p>
      <div className="flex gap-12 justify-around">
        <div onClick={() => handleClick("list")}>
          <div
            className={`border w-[150px] h-[150px] flex justify-center items-center rounded-lg cursor-pointer ${
              selectedView === "list"
                ? "border-2 border-blue-400"
                : "hover:outline-none hover:border-2 hover:border-blue-400"
            }`}
          >
            <CiViewList size={80} color="gray" />
          </div>
          <p className="text-center">List</p>
        </div>
        <div onClick={() => handleClick("board")}>
          <div
            className={`border w-[150px] h-[150px] flex justify-center items-center rounded-lg cursor-pointer ${
              selectedView === "board"
                ? "border-2 border-blue-400"
                : "hover:outline-none hover:border-2 hover:border-blue-400"
            }`}
          >
            <MdTableChart size={80} color="gray" />
          </div>
          <p className="text-center">Board</p>
        </div>
      </div>
    </div>
  );
};
