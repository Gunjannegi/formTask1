export const CreateProject = ({ setAllDetails, allDetails }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const inputElement = document.getElementsByName(name)[0];

    // Remove the red border class from the current input element
    if (inputElement && inputElement.classList.contains("ring-red-300")) {
      inputElement.classList.remove("ring-1", "ring-red-300");
    }

    // Additional logic for client and newclient fields
    if (name === "client" || name === "newclient") {
      const clientElement = document.getElementsByName("client")[0];
      const newClientElement = document.getElementsByName("newclient")[0];

      // Remove the red border class from both client and newclient input elements
      if (clientElement && clientElement.classList.contains("ring-red-300")) {
        clientElement.classList.remove("ring-1", "ring-red-300");
      }
      if (
        newClientElement &&
        newClientElement.classList.contains("ring-red-300")
      ) {
        newClientElement.classList.remove("ring-1", "ring-red-300");
      }
    }

    setAllDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  return (
    <div className="m-7">
      <h1 className="text-center font-bold mb-4 text-lg">Create a project</h1>
      <div className="grid gap-4">
        <div className="grid gap-1">
          <label className="font-semibold">
            Project name
            <span className="text-blue-400">*</span>
          </label>
          <input
            className="border w-full rounded-md p-1 focus:border-0.5 focus:border-blue-400 focus:outline-none"
            placeholder="Enter project name here"
            name="projectname"
            type="text"
            onChange={handleInputChange}
            value={allDetails.projectname}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-semibold">
            Client
            <span className="text-blue-400">*</span>
          </label>
          <div className="flex justify-between items-center">
            <select
              className="border w-full rounded-md p-1 mr-2 focus:border-0.5 focus:border-blue-400 focus:outline-none"
              name="client"
              onChange={handleInputChange}
              value={allDetails.client}
              disabled={!!allDetails.newclient}
            >
              <option value="">Select</option>
              <option value="XYZclient">XYZ client</option>
            </select>
            or
            <input
              className="focus:border-0.5 focus:border-blue-400 focus:outline-none w-1/2 ml-2 rounded-md h-full border p-1"
              placeholder="+ New Client"
              name="newclient"
              onChange={handleInputChange}
              value={allDetails.newclient}
              disabled={!!allDetails.client}
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label className="font-semibold">
            Dates
            <span className="text-blue-400">*</span>
          </label>
          <div className="flex justify-between items-center gap-3">
            <input
              type="date"
              className="border w-full rounded-md p-1 focus:border-0.5 focus:border-blue-400 focus:outline-none"
              name="firstdate"
              onChange={handleInputChange}
              value={allDetails.firstdate}
            />
            <input
              type="date"
              className="border w-full rounded-md p-1 focus:border-0.5 focus:border-blue-400 focus:outline-none"
              name="seconddate"
              onChange={handleInputChange}
              value={allDetails.seconddate}
            />
          </div>
        </div>
        <div className="grid gap-1">
          <label className="font-semibold">Notes</label>
          <textarea
            className="border w-full rounded-md p-1 focus:border-0.5 focus:border-blue-400 focus:outline-none h-24"
            placeholder="Optional"
            name="notes"
            onChange={handleInputChange}
            value={allDetails.notes}
          />
        </div>
      </div>
    </div>
  );
};
