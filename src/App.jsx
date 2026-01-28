import { useState } from "react";
import "./index.css";
import BasicInfo from "./components/BasicInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import CVPreview from "./components/CVPreview";
import Skill from "./components/Skill";
import AccordionItem from "./components/AccordionItem";

function App() {
  const [basicInfo, setBasicInfo] = useState({
    name: "John Smith",
    email: "john.smith@example.com",
    contact: "(123) 456-7890",
    github: "github.com/johnsmith",
    portfolio: "johnsmith.dev",
    linkedin: "linkedin.com/johnsmith",
    summary: "Seeking an opportunity to work with like-minded professionals in order to develop new technologies that improve efficiency or reduce costs within the organization",
  });

  const [education, setEducation] = useState([
    {
      instituteName: "ABC Institute of Technology",
      degree: "Bachelor of Technology (B.Tech) - CSE",
      location: "Delhi",
      startYear: "2017",
      endYear: "2021",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      organisationName: "ABC Technologies Pvt. Ltd.",
      title:"Software Engineer",
      location: "Delhi",
      startDate: "June 2023",
      endDate: "July 2025",
      working: "false",
      responsiblities: ["• Developed and maintained web applications using Java and Spring Boot\n"+
    "• Built and integrated RESTful APIs\n"+
    "• Worked in Agile teams and participated in sprint planning\n"+
    "• Optimized SQL queries and improved system performance\n"+
    "• Conducted code reviews and unit testing"
      ]
    },
  ]);

  const [skill, setSkill] = useState(["React", "Javascript"])
  console.log(skill);

  //For Accordion
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) =>{
    setOpenIndex(openIndex === index ? null : index);
  }

  // For Clear Button
  const emptyBasicInfo = {
    name: "",
    email: "",
    contact: "",
    github: "",
    portfolio: "",
    linkedin: "",
    summary: "",
  }

  const emptyEducation = {
      instituteName: "",
      degree: "",
      location: "",
      startYear: "",
      endYear: "",
    }
    const emptyExperience = {
      organisationName: "",
      title:"",
      location: "",
      startDate: "",
      endDate: "",
      working: "false",
      responsiblities: ""
    }
  const emptySkill = [];

  const clear = () => {
    setBasicInfo(emptyBasicInfo);
    setEducation(emptyEducation);
    setExperience(emptyExperience);
    setSkill(emptySkill);

    setOpenIndex(0);
  }


  return (
    <>
      <div className="w-full h-auto p-8 items-center justify-center">
        <h1 className="text-4xl text-amber-600 font-black text-center">
          RESUME BUILDER
        </h1>
        <div className="text-center my-8">
          <button type="button" className="button" onClick={clear}>Clear</button>

        </div>
        <div className="w-full h-auto flex flex-col lg:flex-row py-8 px-16 gap-4">
          <div className="w-full lg:w-2/5 bg-amber-200 py-4 px-8">
           
            <AccordionItem title="General Information" isOpen={openIndex===0} onToggle={() => toggle(0)}>
              <BasicInfo basicInfo={basicInfo} setBasicInfo={setBasicInfo} />
            </AccordionItem>
            <hr />
            <AccordionItem title="Education" isOpen={openIndex===1} onToggle={() => toggle(1)}><Education education={education} setEducation={setEducation} /></AccordionItem>
            <hr />
            <AccordionItem title="Experience" isOpen={openIndex===2} onToggle={() => toggle(2)}><Experience experience={experience} setExperience={setExperience} /></AccordionItem>
            <hr />
            <AccordionItem title="Skill" isOpen={openIndex===3} onToggle={() => toggle(3)}><Skill skill={skill} setSkill={setSkill} /></AccordionItem>
            
          </div>
          <div className="w-full lg:w-3/5 p-8 bg-amber-50 ">
            <CVPreview
              basicInfo={basicInfo}
              education={education}
              experience={experience}
              skill={skill}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
