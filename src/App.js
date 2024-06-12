import { useState } from "react";
import { CreateProject } from "./components/CreateProject";
import { ProjectType } from "./components/ProjectType";
import { SelectView } from "./components/SelectView";
import { ManageProjects } from "./components/ManageProjects";
import { FaRegCircle } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";

function App() {
  const [createProject, setCreateProject] = useState(false); //State to switch between form and create project button
  const [next, setNext] = useState(1); //State to switch between different pages of the form
  //State to track all input fields
  const [allDetails, setAllDetails] = useState({
    projectname: "",
    client: "",
    newclient: "",
    firstdate: "",
    seconddate: "",
    notes: "",
    duration: "",
    hrprhead: "",
    cost: "",
    reset: "",
    limit: "",
    alerts: "",
    view: "",
    managedby: "",
  });

  //Function for validations
  const validateRequiredFields = (requiredFields) => {
    //Checking for any required empty field
    const emptyFields = requiredFields.filter((field) => !allDetails[field]);
    if (emptyFields.length > 0) {
      alert(`Please fill in all required fields`);
      emptyFields.forEach((field) => {
        const inputElement = document.getElementsByName(field)[0];
        inputElement.classList.add("ring-1", "ring-red-300");
      });
      return;
    }
    setNext((prev) => prev + 1);
  };

  const handleChange = () => {
    setCreateProject(true);
  };

  //Function to check each page validations.
  const handleNext = () => {
    if (next === 1) {
      allDetails.client === "" && allDetails.newclient === ""
        ? validateRequiredFields([
            "projectname",
            "newclient",
            "client",
            "firstdate",
            "seconddate",
          ])
        : validateRequiredFields(["projectname", "firstdate", "seconddate"]);
    }
    if (next === 2) {
      validateRequiredFields(["duration", "hrprhead", "cost"]);
    }
    if (next === 3) {
      if (allDetails.view === "") {
        alert("Please select one of the following.");
        return;
      } else {
        setNext((prev) => prev + 1);
      }
    }
  };

  //Function for button to move previous
  const handlePrevious = () => {
    setNext((prev) => prev - 1);
  };

  //Function to save the detail
  const handleSave = () => {
    if (allDetails.managedby === "") {
      alert("Please select one of the following.");
      return;
    } else {
      localStorage.setItem("allDetails", JSON.stringify(allDetails));
      alert("Data is saved successfully.");
      setCreateProject(false);
      setNext(1);
      setAllDetails({
        projectname: "",
        client: "",
        newclient: "",
        firstdate: "",
        seconddate: "",
        notes: "",
        duration: "",
        hrprhead: "",
        cost: "",
        reset: "",
        limit: "",
        alerts: "",
        view: "",
        managedby: "",
      });
    }
  };
  return (
    <>
      {!createProject && (
        <div className="m-auto mt-0 flex items-center justify-center w-[100vw] h-[100vh] bg-black">
          <button
            className="bg-blue-500 p-3 rounded-xl text-white text-lg 
    font-semibold hover:bg-blue-400 transition duration-300"
            onClick={handleChange}
          >
            + Create Project
          </button>
        </div>
      )}
      {createProject && (
        <div className="w-max h-max  m-auto  mt-40 border rounded-xl shadow-custom p-3 transition duration-1000">
          <div className="w-[500px] h-[500px]">
            <div
              className="text-gray-400 text-right cursor-pointer transition-opacity duration-500 ease-in-out"
              onClick={() => setCreateProject(false)}
            >
              X
            </div>
            {next === 1 && (
              <CreateProject
                setAllDetails={setAllDetails}
                allDetails={allDetails}
              />
            )}
            {next === 2 && (
              <ProjectType
                setAllDetails={setAllDetails}
                allDetails={allDetails}
              />
            )}
            {next === 3 && (
              <SelectView
                setAllDetails={setAllDetails}
                allDetails={allDetails}
              />
            )}
            {next === 4 && (
              <ManageProjects
                setAllDetails={setAllDetails}
                allDetails={allDetails}
              />
            )}
          </div>
          <div className="flex items-center mx-7 justify-around">
            {next > 1 && (
              <button
                onClick={handlePrevious}
                className="text-gray-500 text-sm flex items-center  transition duration-300"
              >
                <span className="mr-2">
                  <MdKeyboardArrowLeft />
                </span>
                <span>Back</span>
              </button>
            )}
            {next < 4 && (
              <button
                className="text-white text-lg bg-blue-500 px-4 py-1 rounded-lg  transition duration-300"
                onClick={handleNext}
              >
                Next
              </button>
            )}
            {next === 4 && (
              <button
                className="text-white text-lg bg-blue-500 px-4 py-1 rounded-lg  transition duration-300"
                onClick={handleSave}
              >
                Save
              </button>
            )}
          </div>
          <div className="flex justify-center mt-8 ">
            <FaRegCircle
              size={10}
              className={
                next === 1
                  ? "bg-gray-500 rounded-xl text-white"
                  : "text-white bg-gray-300 rounded-xl"
              }
            />
            <FaRegCircle
              size={10}
              className={
                next === 2
                  ? "bg-gray-500 rounded-xl text-white"
                  : "text-white  bg-gray-300 rounded-xl"
              }
            />
            <FaRegCircle
              size={10}
              className={
                next === 3
                  ? "bg-gray-500 rounded-xl text-white"
                  : "text-white  bg-gray-300 rounded-xl"
              }
            />
            <FaRegCircle
              size={10}
              className={
                next === 4
                  ? "bg-gray-500 rounded-xl text-white"
                  : "text-white  bg-gray-300 rounded-xl"
              }
            />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
