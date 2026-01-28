import React from "react";

function Experience({ experience, setExperience }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updated = [...experience];

    updated[index][name] = value;
    setExperience(updated);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        organisationName: "",
        title:"",
        location: "",
        startDate: "",
        endDate: "",
        working: "",
        responsiblities:""
      },
    ]);
  };
  return (
    <form>
      {experience.map((exp, index) => (
        <div key={index}>
          <div className="input-container">
            <label htmlFor="organisationName" className="label">Organisation Name</label>
            <input
              className="input"
              type="text"
              id="organisationName"
              name="organisationName"
              placeholder="e.g ABC Technology"
              value={exp.organisationName}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="location" className="label">Location</label>
            <input
              className="input"
              type="text"
              id="location"
              name="location"
              placeholder="e.g Delhi"
              value={exp.location}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="title" className="label">Title</label>
            <input
              className="input"
              type="text"
              id="title"
              name="title"
              placeholder="e.g Software Engineer"
              value={exp.title}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="startDate" className="label">Start Date</label>
            <input
              className="input"
              type="date"
              id="startDate"
              name="startDate"
              value={exp.startDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="endDate" className="label">End Date</label>
            <input
              className="input"
              type="date"
              id="endDate"
              name="endDate"
              value={exp.endDate}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div className="flex flex-row gap-2">
            <input
              className=""
              type="checkbox"
              name="working"
              id="working"
              value={exp.working}
              onChange={(e) =>
                handleChange(index, {
                  target: {
                    name: "working",
                    value: e.target.checked,
                  },
                })
              }
            />
            <label htmlFor="working" className="label">Currently Working</label>
          </div>
          <div className="input-container pt-4 pb-8">
        <label htmlFor="responsiblities" className="label">
          Key Responsiblities
        </label>
        <textarea
          className="input"
          name="responsiblities"
          id="responsiblities"
          rows="10"
          value={exp.responsiblities}
          onChange={(e) => handleChange(index, e)}
          placeholder="Enter you job responsiblities"
        ></textarea>
      </div>
        </div>
      ))}
      <button className="button" type="button" onClick={addExperience}>
        Add Experience
      </button>
    </form>
  );
}

export default Experience;
