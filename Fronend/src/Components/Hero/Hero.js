import React from "react";

import GraphicEqIcon from "@mui/icons-material/GraphicEq";
import "./Hero.css";
import step1 from "../../img/guide/plain.png";
import step2 from "../../img/guide/en.png";

export default function Hero() {
  return (
    <>
      <div className="hero-bg">
        <div className="d-flex px5p">
          <div className="w-50 text-start text-white pt-xl">
            <h1 className="fontHero">
              Safeguarding Your Virtual Frontier with Unyielding Computer Security.
            </h1>
            <p className="my-4 mb-5  fontP text-white">
              Navigating the Digital Realm with Uncompromised Confidence through Cutting-Edge .
            </p>
            <button className="bg-theme-btn btn px-5 py-2 rounded-3 fs-5">
              {" "}
              <GraphicEqIcon className="me-1 my-auto" />{" "}
              <a className="text-decoration-none text-light" href="#steps">
                Explore SecureHub
              </a>
            </button>
          </div>
          <div className="w-50"></div>
        </div>
      </div>
      <div id="steps" className="d-flex py-5 my-5 container text-start">
        <div className="w-50 mx-auto h-100 px-3 my-auto">
          <div className="d-flex">
            <h3 className="mb-4 fs-3 rounded-3 px-3 py-2 bg-contact text-light">
              Step{" "}
              <span className="textAbout fs-4 my-auto bg-info text-white rounded-circle p-3">
                01
              </span>
            </h3>
          </div>
          <div className="d-flex">
          <h5 className="ms-1 my-auto">Import your file or drag and drop.</h5>
          
          </div>
          

          
        </div>
        <div className="w-50 d-flex">
          <img src={step1} alt="" className="s-pic m-auto p-0" width="60%" />
        </div>
      </div>
      <div className="d-flex pb-5 mb-5 container text-start bg-gray">
        <div className="w-50 mx-auto h-100 px-3 my-auto">
          <div className="d-flex">
            <h3 className="mb-4 fs-3 rounded-3 px-3 py-2 bg-contact text-light">
              Step{" "}
              <span className="textAbout fs-4 my-auto bg-info text-white rounded-circle p-3">
                02
              </span>
            </h3>
          </div>
          <h5 className="ms-1">
           Encrypt or Decrypt your file.
          </h5>
        </div>
        <div className="w-50 d-flex">
          <img src={step2} alt="" className="s-pic m-auto p-0 rounded-pill" width="80%" />
        </div>
      </div>
    </>
  );
}
