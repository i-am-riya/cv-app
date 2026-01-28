import React from "react";

function Education({ education, setEducation }) {
  const handleChange = (index, e) => {
    const { name, value } = e.target;

    const updated = [...education];

    updated[index][name] = value;

    setEducation(updated);
  };
  const addEducation = () => {
    setEducation([
      ...education,
      {
        instituteName: "",
        degree: "",
        location: "",
        startYear: "",
        endYear: "",
      },
    ]);
  };

  return (
    <form>
      {education.map((edu, index) => (
        <div key={index}>
          <div className="input-container">
            <label htmlFor="instituteName" className="label">Institute Name</label>
          <input
            className="input"
            type="text"
            id="instituteName"
            name="instituteName"
            placeholder="e.g ABC Institute of Technology"
            value={edu.instituteName}
            onChange={(e) => handleChange(index, e)}
          />
          </div>
          <div className="input-container">
            <label htmlFor="degree" className="label">Degree</label>
          <input
            className="input"
            type="text"
            id="degree"
            name="degree"
            value={edu.degree}
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
            placeholder="e.g Gurgaon, Haryana"
            value={edu.location}
            onChange={(e) => handleChange(index, e)}
          />
          </div>
          <div className="input-container">
            <label htmlFor="startYear" className="label">Start Year</label>
          <input
            className="input"
            type="date"
            id="startYear"
            name="startYear"
            value={edu.startYear}
            onChange={(e) => handleChange(index, e)}
          />
          </div>
          <div className="input-container">
            <label htmlFor="endYear" className="label">End Year</label>
          <input
            className="input"
            type="date"
            id="endYear"
            name="endYear"
            value={edu.endYear}
            onChange={(e) => handleChange(index, e)}
          /></div>
        </div>
      ))}

      <button className="button" type="button" onClick={addEducation}>
        Add Education
      </button>
    </form>
  );
}

export default Education;
