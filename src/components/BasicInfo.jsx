import React from "react";

function BasicInfo({ basicInfo, setBasicInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setBasicInfo({
      ...basicInfo,
      [name]: value,
    });
  };

  return (
    <form>
      <div className="input-container">
        <label htmlFor="name" className="label">
          Full Name
        </label>
        <input
          className="input"
          type="text"
          id="name"
          name="name"
          value={basicInfo.name}
          onChange={handleChange}
          placeholder="e.g John Smith"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="email" className="label">
          Email Address
        </label>
        <input
          className="input"
          type="email"
          id="email"
          name="email"
          value={basicInfo.email}
          onChange={handleChange}
          placeholder="e.g john.smith@example.com"
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="contact" className="label">
          Phone Number
        </label>
        <input
          className="input"
          type="tel"
          id="contact"
          name="contact"
          value={basicInfo.contact}
          onChange={handleChange}
          placeholder="e.g (123) 456-7890"
        />
      </div>
      <div className="input-container">
        <label htmlFor="github" className="label">
          Github Profile
        </label>
        <input
          className="input"
          type="text"
          id="github"
          name="github"
          value={basicInfo.github}
          onChange={handleChange}
          placeholder="e.g github.com/johnsmith"
        />
      </div>
      <div className="input-container">
        <label htmlFor="portfolio" className="label">
          Portfolio/Website
        </label>
        <input
          className="input"
          type="text"
          id="portfolio"
          name="portfolio"
          value={basicInfo.portfolio}
          onChange={handleChange}
          placeholder="e.g johnsmith.dev"
        />
      </div>
      <div className="input-container">
        <label htmlFor="linkedin" className="label">
          Linkedin Profile
        </label>
        <input
          className="input"
          type="text"
          id="linkedin"
          name="linkedin"
          value={basicInfo.linkedin}
          onChange={handleChange}
          placeholder="e.g linkedin.com/johnsmith"
        />
      </div>
      <div className="input-container">
        <label htmlFor="summary" className="label">
          Career Objective
        </label>
        <textarea
          className="input"
          name="summary"
          id="summary"
          value={basicInfo.summary}
          onChange={handleChange}
          placeholder="Enter your short career objective"
        ></textarea>
      </div>
    </form>
  );
}

export default BasicInfo;
