import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

export default function Skills(props) {
  const lang = props.lang;
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 id={lang === 'en' ? 'en' : 'hide'} className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
          <h1 id={lang === 'ru' ? 'ru' : 'hide'} className="skills-header" style={{ color: theme.text }}>
            Мои компетенции
          </h1>
          <h1 id={lang === 'de' ? 'de' : 'hide'} className="skills-header" style={{ color: theme.text }}>
            What I Do?
          </h1>
        </Fade>
      </div>
      <SkillSection lang={lang} theme={theme} />
    </div>
  );
}
