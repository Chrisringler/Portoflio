import React from "react";
import "./skills.css"
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
const Skills = ()=>{
    return(
    <section className="skills__section" id="skills">
          <h2 className="section1__title">Skills</h2>
            <span className="section1__subtitle">My tecnical level</span>

            <div className="skills__container container grid">
            <FrontEnd/>
            <BackEnd/>
            </div>
    </section>
    )
}

export default Skills