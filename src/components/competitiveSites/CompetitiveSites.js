import React from "react";
import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class CompetitiveSites extends React.Component {
  render() {
    return (
      <div className="competitive-sites-main-div">
        <ul className="dev-icons">
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.siteName}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.siteName}</strong>
                  </Tooltip>
                }
              >
                <li className="competitive-sites-inline" name={logo.siteName}>
                  <a
                    href={logo.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {logo.iconifyClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.iconifyClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}
                    {!logo.iconifyClassname && logo.imageSrc && (
                      <img
                        className="skill-image"
                        style={logo.style}
                        src={`${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`}
                        alt={logo.skillName}
                      />
                    )}
                  </a>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
        <div className="hh-skill-tag-list">
        {this.props.skill_hh.map((skills) => {
            return (
              <OverlayTrigger
                key={skills.skillTip}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    {skills.skillTip}
                  </Tooltip>
                }
              >
              <div className={`hh-tag_inline ${skills.success}`}>
                <div className="skill_icon">
                  <span
                        className={`_icon ${skills.icon}`}
                  ></span>
                </div>
                <span
                        className="skill_text"
                >{skills.skillText}</span>
              </div>
              </OverlayTrigger>
              );
          })}
        </div>
        <div className="hh-skill-tag-list">
        {this.props.skill_linkedin.map((skills) => {
            return (
              <OverlayTrigger
                key={skills.skillTip}
                placement={"top"}
                style={{ marginBottom: "5px" }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    {skills.skillTip}
                  </Tooltip>
                }
              >
              <div className={`hh-tag_inline linkedin`}>
                <div className="skill_icon">
                  <span
                        className="_icon_linkedin"
                  ></span>
                </div>
                <span
                        className="skill_text_linkedin"
                >{skills.skillText}</span>
              </div>
              </OverlayTrigger>
              );
          })}
        </div>
      </div>
    );
  }
}

export default CompetitiveSites;
