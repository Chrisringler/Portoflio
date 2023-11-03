import React, { useState } from 'react';
import "./services.css"
const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
    <h2 className="section__title1">Services</h2>
    <span className="section__subtitle1">What I offer</span>

    <div className="services__container container grid">
      <div className="services__content">
        <i className="uil uil-web-grid services__icon"></i>
        <h3 className="services__title">
          Product <br /> designer
        </h3>

        <span className="services__button" onClick={() => toggleTab(1)}>
          View More <i className="uil uil-arrow-right services__button-icon"></i>
        </span>
        <div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
          <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
          <div className="services__modal-content">
            <h3 className="services__modal-title">Product Designer</h3>
            <p className="services__modal-description"></p>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I develop the user interface.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  Web page development.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                  I create UX element interactions.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Technical knowledge
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Strategic thinking and problem solving
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">
            Ui/Ux <br /> Designer
          </h3>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
            <div className="services__modal-content">
            <h3 className="services__modal-title">Ui/Ux Designer</h3>
            <p className="services__modal-description"></p>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Creation of intuitive and attractive user interfaces that improve usability and user experience.

                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Optimization of information architecture to ensure clear and easy navigation within applications and websites.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">             
                  User research and data analysis to understand user needs and expectations and apply that insight in design.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Close collaboration with the development team and other stakeholders to ensure a smooth and successful implementation of the design.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Interface optimization for a smooth and mobile-friendly mobile experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <div className="services__content">
          <i className="uil uil-edit services__icon"></i>
          <h3 className="services__title">Backend<br /> Architect</h3>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>
          <div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
            <div className="services__modal-content">
            <h3 className="services__modal-title">Backend Architect</h3>
            <p className="services__modal-description"></p>
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Design and development of scalable backend.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">   
                 Implementation of technical solutions.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                 <p className="services__modal-info">
                Performance optimization.
                </p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">     
                    Security and data protection.
                </p>
              </li>

              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">
                Integration of services and APIs.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Services;
