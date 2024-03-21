import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";


class CertificationCard extends Component {
  render() {
    const lang = this.props.lang;
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assests/images/${certificate.logo_path}`)}
                  alt={certificate.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title"style={{ color: theme.body}}>
                  {certificate.Fade[lang]}
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate[`title_${lang}`]}
            </h2>
            <br/>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate[`subtitle_${lang}`]}
            </h3>
          </div>
        </div>
      </Fade>
    );
  }
}

export default CertificationCard;
