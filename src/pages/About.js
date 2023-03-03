import React from "react";
import "../assets/styles/About.css";
import MyCard from "../components/MyCard";

const About = () => {
  return (
    <div className="about">
      <div className="paragraph">
        Online Einkaufen ist wichtig für uns. Um sichere zu einkaufen arbeiten
        wir. Deswegen entwicklen wir nonstop in diesem Project.
      </div>
      <MyCard />
    </div>
  );
};

export default About;
