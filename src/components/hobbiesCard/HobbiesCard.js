import React, { Component } from "react";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
import Codepen from "react-codepen-embed";
import "./HobbiesCard.css";

class HobbiesCard extends Component {
  render() {
  const theme = this.props.theme;
  const lang = this.props.lang;
  return (
    <div className="hobbies-card">
      <Fade bottom duration={2000} distance="40px">
        <div className="hobbies-card-body-div">
          {hobbies.hobbies.map((hobbiesdata) => {
            return (
              <div className="hobbies-data" key={hobbiesdata.title}>
                <div className="hobbies-heading">
                  <Fade left duration={2000}>
                    <div
                      className="hobbies-card-title"
                      style={{ color: theme.text }}
                    >
                      {hobbiesdata[`title_${lang}`]}
                    </div>
                    <div
                      className="hobbies-card-subtitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {hobbiesdata[`description_${lang}`]}
                    </div>
                  </Fade>
                </div>
                <Codepen 
                  hash={hobbiesdata.codepen.hash} 
                  user={hobbiesdata.codepen.user}
                  height={hobbiesdata.codepen.height}
                  defaultTab={hobbiesdata.codepen.defaultTab}
                  preview={hobbiesdata.codepen.preview}/>
                <Fade right duration={2000}>
                  <div className="hobbies-card-img">
                    <img
                      className="hobbies-image"
                      src={require(`../../assests/images/${hobbiesdata["image_path"]}`)}
                      alt={hobbiesdata[`title_${lang}`]}
                    />
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};
}

export default HobbiesCard;
