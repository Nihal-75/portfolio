import React from "react";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "../../css/social.css";
import { FaPython, FaRegFileExcel } from "react-icons/fa";
import { SiMongodb, SiNumpy, SiPandas } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiBarChartAlt } from "react-icons/bi";


const Socialmedia = () => {
  const list = [
    {
      title: "Python",
      icons: <FaPython className="programing-icons" />,
    },
    {
      title: "Num Py",
      icons: <SiNumpy className="programing-icons" />,
    },
    {
      title: "Power BI",
      icons: <BiBarChartAlt className="programing-icons" />,
    },
    {
      title: "Excel",
      icons: <FaRegFileExcel className="programing-icons" />,
    },
    {
      title: "Pandas",
      icons: <SiPandas className="programing-icons" />,
    },
    {
      title: "M Db",
      icons: <SiMongodb className="programing-icons" />,
    },
    {
      title: "SQL",
      icons: <SiMysql className="programing-icons" />,
    },
    {
      title: "ChatGPT",
      icons: <FaPersonCircleCheck className="programing-icons" />,
    },
  ];

  return (
    <div className="socail-media">
      <hr className="hr" />
      <div className="contetent-cards">
        {list.map((items, index) => (
          <div key={index} className="content-icons-div">
            <>{items.icons}</>
            <h1>{items.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socialmedia;
