import React from "react";
import { Fade } from "react-reveal";
import "./HobbiesCard.css";

const HobbiesCard = (props) => {
  const hobbies = this.props.degree;
  const theme = this.props.theme;
  return (
    <div className="hobbies-card">
      <Fade bottom duration={2000} distance="40px">
        <div className="hobbies-card-body-div">
              <div className="hobbies-data" key={hobbies.title}>
                <div className="hobbies-heading">
                  <Fade left duration={2000}>
                    <div
                      className="hobbies-card-title"
                      style={{ color: theme.text }}
                    >
                      {hobbies.title}
                    </div>
                    <div
                      className="hobbies-card-subtitle"
                      style={{ color: theme.secondaryText }}
                    >
                      {hobbies.description}
                    </div>
                  </Fade>
                </div>
                <Fade right duration={2000}>
                  <div className="hobbies-card-img">
                    <img
                      className="hobbies-image"
                      src={require(`../../assests/images/${hobbies.logo_path}`)}
                      alt={hobbies.title}
                    />
                  </div>
                </Fade>
              </div>
        </div>
      </Fade>
    </div>
  );
};

export default HobbiesCard;
