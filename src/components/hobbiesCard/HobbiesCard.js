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
      <iframe height="300" style="width: 100%;" scrolling="no" title="Coulomb's Law Circuit Simulation" src="https://codepen.io/lilgreenland/embed/xprGvr?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/lilgreenland/pen/xprGvr">
  Coulomb's Law Circuit Simulation</a> by Landgreen (<a href="https://codepen.io/lilgreenland">@lilgreenland</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
    </div>
  );
};
}

export default HobbiesCard;
