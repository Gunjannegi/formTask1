export const ProjectType = ({ setAllDetails, allDetails }) => {
  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    const inputElement = document.getElementsByName(name)[0];
    if (inputElement && inputElement.classList.contains("ring-red-300")) {
      inputElement.classList.remove("ring-1", "ring-red-300");
    }

    setAllDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="m-7 ">
      <h1 className="text-center font-bold text-lg">Project type</h1>
      <div className="align-middle text-center text-sm text-gray-400 mb-8">
        Don't panic - You can also customize this types in settings
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-3 border rounded-lg ">
          <button className="border-r-2 p-2 bg-blue-400 text-white">
            Time & Materials
          </button>
          <button className="border-r-2 p-2">Fixed Fee</button>
          <button className="border-r-2 p-2">Non-Billable</button>
        </div>
        <div>
          <h1 className="font-semibold text-lg">
            Hourly<span className="text-blue-400">*</span>
          </h1>
          <p className="text-gray-400 text-sm">
            We need hourly rates to track your project's billable amount.
          </p>
          <div className="flex gap-2 my-4">
            <select
              className="border rounded-lg p-1 w-1/2 text-sm focus:border-0.5 focus:border-blue-400 focus:outline-none"
              name="duration"
              onChange={handleInputChange}
              value={allDetails.duration}
            >
              <option value="">Select</option>
              <option value="rate">Project Hourly Rate</option>
            </select>
            <input
              className="border rounded-lg p-1 w-24 focus:border-0.5 focus:border-blue-400 focus:outline-none"
              name="cost"
              type="number"
              onChange={handleInputChange}
              value={allDetails.cost}
            />
          </div>
          <div>
            <h1 className="font-semibold text-lg">
              Budget<span className="text-blue-400">*</span>
            </h1>
            <p className="text-gray-400 text-sm">
              We need hourly rates to track your project's billable amount.
            </p>
            <select
              className="border text-sm w-1/2  rounded-lg p-1 my-4 focus:border-0.5 focus:border-blue-400 focus:outline-none"
              name="hrprhead"
              onChange={handleInputChange}
              value={allDetails.hrprhead}
            >
              <option>Select</option>
              <option>Hours per Person</option>
            </select>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="reset"
                checked={allDetails.reset || false}
                onChange={handleInputChange}
              />
              <span>Budget resets every month</span>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="alerts"
                onChange={handleInputChange}
                checked={allDetails.alerts || false}
              />
              <span>
                Send email alerts if project exceeds{" "}
                <input
                  className="border-2 w-10 px-0.5 rounded-lg focus:border-0.5 focus:border-blue-400 focus:outline-none"
                  onChange={handleInputChange}
                  name="limit"
                  value={allDetails.limit}
                />{" "}
                % of budegt
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
