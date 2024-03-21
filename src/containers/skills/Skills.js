import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";

export default function Skills(props) {
  const lang = props.lang;
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            {greeting.pro[lang]}
          </h1>
        </Fade>
      </div>
      <SkillSection lang={lang} theme={theme} />
    </div>
  );
}
