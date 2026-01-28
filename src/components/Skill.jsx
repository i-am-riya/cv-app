import React, { useState } from 'react'

function Skill({skill, setSkill}) {
    const [skillInput, setSkillInput] = useState("")
    const handleChange = () =>{
        if (!skillInput.trim()) return;

        setSkill([...skill, skillInput.trim()]);
        setSkillInput("");
    };
    const clear = (e) =>{
        const updatedSkills = skill.filter(
            (_, index) => index !== e
        )
        setSkill(updatedSkills);
    }

  return (
    <>
        <div className="flex flex-row">
            <input className="input" type="text" name="skill" id="skill" value={skillInput} placeholder="e.g React" onChange={(e) => setSkillInput(e.target.value)} />
            <button onClick={handleChange} className="button">Add</button>
        </div>
        <div className="py-2">
                <ul>{skill.map((s, index) => (
                    <li key={index} className="flex flex-row justify-between">* {s} <button onClick={() => clear(index)}>-</button></li>
                ))}</ul>
            </div>
    </>
  )
}

export default Skill