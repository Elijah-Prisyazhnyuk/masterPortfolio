import React, { Component } from "react";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
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
      <iframe allow="accelerometer *; camera *; encrypted-media *; display-capture *; geolocation *; gyroscope *; microphone *; midi *; clipboard-read *; clipboard-write *; web-share *; serial *; xr-spatial-tracking *" allowfullscreen="true" allowpaymentrequest="true" allowtransparency="true" class="result-iframe  " frameborder="0" id="result-iframe" loading="lazy" name="CodePen Preview for Coulomb's Law Circuit Simulation" sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation allow-downloads allow-presentation" scrolling="yes" title="CodePen Preview for Coulomb's Law Circuit Simulation" data-src="https://codepen.io/lilgreenland/fullembedgrid/xprGvr?animations=run&amp;type=embed" src="https://codepen.io/lilgreenland/fullembedgrid/xprGvr?animations=run&amp;type=embed">
  </iframe>
    </div>
  );
};
}

export default HobbiesCard;
