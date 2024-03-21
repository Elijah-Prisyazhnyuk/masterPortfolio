import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";


function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <img alt="Elijah is Analysing Data" src={require(`../../assests/images/data_science.svg`)} ></img>;
  else if (props.fileName === "EmbeddedEngineerImg")
    return <img alt="Elijah is Analysing Data" src={require(`../../assests/images/embedded.svg`)} ></img>
  return <img alt="Elijah is Analysing Data" src={require(`../../assests/images/3d_design.svg`)} ></img>
}


class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    const lang = this.props.lang;
    return (
      <div>
        {skills.data.map((skill, idx) => {
          return (
            <div className="skills-main-div">
              {idx % 2 === 0 ? (
                <Fade left duration={2000}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  </div>
                </Fade>
              ) : (
                <div className="skills-text-div">
                  <Fade left duration={1000}>
                    <h1
                      
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill[`title_${lang}`]}
                    </h1>
                    
                  </Fade>
                  <Fade left duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade left duration={2000}>
                  <div>
                      {skill.skills.find(skill => skill[lang])?.[lang].map((sentence) => {
                        return (
                        <><p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                          >
                            {sentence}
                        </p></>
                        );
                      })}
                  </div>
                  </Fade>
                </div>
              )}
              {idx % 2 === 0 ? (
                <div className="skills-text-div">
                  <Fade right duration={1000}>
                  <h1
                      
                      className="skills-heading"
                      style={{ color: theme.text }}
                    >
                      {skill[`title_${lang}`]}
                    </h1>
                    
                  </Fade>
                  <Fade right duration={1500}>
                    <SoftwareSkill logos={skill.softwareSkills} />
                  </Fade>
                  <Fade right duration={2000}>
                  <div>
                      {skill.skills.find(skill => skill[lang])?.[lang].map((sentence) => {
                        return (
                        <><p
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                          >
                            {sentence}
                        </p></>
                        );
                      })}
                  </div>
                  </Fade>
                </div>
              ) : (
                <Fade right duration={2000}>
                  <div className="skills-image-div">
                    <GetSkillSvg fileName={skill.fileName} theme={theme} />
                  </div>
                </Fade>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
