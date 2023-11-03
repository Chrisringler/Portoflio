import React from "react";

const BackEnd = ()=>{
    return(
        <div className="skills__content">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skils__name">Node.js</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skils__name">SQL</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skils__name">PostgreSQL</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
        </div>

        <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skils__name">Express</h3>
                    <span className="skills__level">Advanced</span>
                </div>
            </div>
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skils__name">MongoDB</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>
            <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skils__name">Firebase</h3>
                    <span className="skills__level">Basic</span>
                </div>
            </div>
        </div>
     </div>
     </div>
    )
}

export default BackEnd