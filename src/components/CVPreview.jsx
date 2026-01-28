// import React from 'react'

function CVPreview({ basicInfo, education, experience, skill }) {
  console.log(education);
  return (
    <div>
      <div className="">
        {/* <h2>Basic information</h2> */}
        <div className="text-center capitalize text-3xl font-semibold">
          {basicInfo.name}
        </div>

        <div className="flex flex-row gap-4 text-sm text-gray-600 mt-2 my-4 justify-center">
          <p>{basicInfo.github}</p>
          <p>{basicInfo.portfolio}</p>
          <p>{basicInfo.linkedin}</p>
        </div>
        <hr />
        <div className="flex flex-row gap-4 justify-center my-2">
          <p>{basicInfo.email}</p>
          <p>{basicInfo.contact}</p>
        </div>
        <hr />
        <div className="text-2xl font-semibold mt-6 mb-2">Objective</div>
        <hr />
        <p className="my-2">{basicInfo.summary}</p>
      </div>
      {education?.length > 0 && (
        <div>
          <div className="text-2xl font-semibold mt-4 mb-2">Education </div>
          <hr />
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex flex-row justify-between items-center">
                <p className="text-lg font-semibold mt-2">
                  {edu.instituteName}
                </p>
                <div className="text-gray-700">
                  {edu.startYear}-{edu.endYear}
                </div>
              </div>
              <p>{edu.degree}</p>
              <p>{edu.location}</p>
            </div>
          ))}
        </div>
      )}
      {experience?.length > 0 && (
        <div>
          <div className="text-xl font-semibold mt-4 mb-2">Experience</div>
          <hr />
          {experience.map((exp, index) => (
            <div key={index}>
              <div className="flex flex-row justify-between items-center">
                <p className="text-lg font-semibold mt-2">
                  {exp.organisationName}
                </p>
                <div className="text-gray-700">
                  {exp.startDate}-{exp.endDate}
                  <span className="font-semibold text-gray-700">
                    {exp.working ? "(Present)" : ""}
                  </span>
                </div>
              </div>
              <p>{exp.title}</p>
              <p>{exp.location}</p>
              <div className="font-semibold text-gray-700 py-2">
                Responsiblities
              </div>
              <div className="pl-4">{exp.responsiblities}</div>
            </div>
          ))}
        </div>
      )}
      <div className="text-2xl font-semibold mt-6 mb-2">Skills</div>
      <hr />
      {skill.length === 0 ? (
        <p>No skills added yet</p>
      ) : (
        skill.map((skill, index) => <li key={index}>{skill}</li>)
      )}
    </div>
  );
}

export default CVPreview;
