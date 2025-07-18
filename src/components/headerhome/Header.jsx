import React from "react";
import "../../css/header.css";
import { FaLinkedin } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header-home">
      <div className="header-card-img">
        <div className="shivam-pic">
          <img src="/image.png" alt="" />
          <h4>Nihal Pandey</h4>
        </div>
      </div>
      <div className="header-card">
        <div className="header-content-name">
          <p>
            Hi, I'm Nihal Pandey — a passionate Data Analyst dedicated to
            transforming raw data into meaningful insights that drive informed
            decisions. I specialize in working with tools like MS Excel, Power
            BI, Python, SQL, and NoSQL to analyze, visualize, and interpret
            complex datasets. With a strong analytical mindset and attention to
            detail, I focus on uncovering trends, identifying opportunities, and
            presenting data in a clear and actionable way. From building
            interactive dashboards to automating data workflows, I bring
            precision, curiosity, and problem-solving to every project. Whether
            it’s streamlining business processes, generating data-driven
            reports, or supporting strategic decisions, I aim to turn data into
            real-world impact.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Header;
