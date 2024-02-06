import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import EmbeddedEngineerImg from "../../src/assests/images/fullstack.svg"
import DataScienceImg from "../../src/assests/images/data_science.svg";
import CloudInfraImg from "../../src/assests/images/cloud_infrastructure.svg";
import DesignImg from "../../src/assests/images/ui_ux_design.svg";



class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  <img
                    alt="Ashutosh is Analysing Data"
                    src={require('${skill.fileName}')}
                  ></img>
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
