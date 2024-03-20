import React, { Component } from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
  render() {
    const degree = this.props.degree;
    const lang = this.props.lang;
    const theme = this.props.theme;
    return (
      <div className="degree-card">
        {degree.logo_path && (
          <Flip left duration={2000}>
            <div className="card-img">
              <img
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  transform: "scale(0.9)",
                }}
                src={require(`../../assests/images/${degree.logo_path}`)}
                alt={degree.alt_name}
              />
            </div>
          </Flip>
        )}
        <Fade right duration={2000} distance="40px">
          <div
            className="card-body"
            style={{ width: degree.logo_path ? "90%" : "100%" }}
          >
            <div
              className="body-header"
              style={{ backgroundColor: theme.headerColor }}
            >
              <div className="body-header-title">
                <h2 className="card-title" id={lang === 'en' ? 'en' : 'hide'} style={{ color: theme.text }}>
                  {degree.title}
                </h2>
                <h2 className="card-title" id={lang === 'ru' ? 'ru' : 'hide'} style={{ color: theme.text }}>
                  {degree.title_ru}
                </h2>
                <h2 className="card-title" id={lang === 'de' ? 'de' : 'hide'} style={{ color: theme.text }}>
                  {degree.title_de}
                </h2>
                <br/>
                <h3 className="card-subtitle" id={lang === 'en' ? 'en' : 'hide'} style={{ color: theme.text }}>
                  {degree.subtitle}
                </h3>
                <h3 className="card-subtitle" id={lang === 'ru' ? 'ru' : 'hide'} style={{ color: theme.text }}>
                  {degree.subtitle_ru}
                </h3>
                <h3 className="card-subtitle" id={lang === 'de' ? 'de' : 'hide'} style={{ color: theme.text }}>
                  {degree.subtitle_de}
                </h3>
              </div>
              <div className="body-header-duration">
                <h3 className="duration" style={{ color: theme.text }}>
                  {degree.duration}
                </h3>
              </div>
            </div>
            <div className="body-content">
              {degree.descriptions.find(degree => degree[lang])?.[lang].map((sentence) => {
                return (
                  <p className="content-list" style={{ color: theme.text }}>
                    {sentence}
                  </p>
                );
              })}
              {degree.website_link && (
                <a
                  href={degree.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="visit-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" id={lang === 'en' ? 'en' : 'hide'} style={{ color: theme.text }}>
                      Visit Website
                    </p>
                    <p className="btn" id={lang === 'ru' ? 'ru' : 'hide'} style={{ color: theme.text }}>
                      Сайт
                    </p>
                    <p className="btn" id={lang === 'de' ? 'de' : 'hide'} style={{ color: theme.text }}>
                      Visit Website
                    </p>
                  </div>
                </a>
              )}
              {degree.website_link && (
                <a
                  href={degree.document_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div
                    className="doc-btn"
                    style={{ backgroundColor: theme.headerColor }}
                  >
                    <p className="btn" id={lang === 'en' ? 'en' : 'hide'} style={{ color: theme.text }}>
                      {degree.button_text}
                    </p>
                    <p className="btn" id={lang === 'ru' ? 'ru' : 'hide'} style={{ color: theme.text }}>
                      {degree.button_text_ru}
                    </p>
                    <p className="btn" id={lang === 'de' ? 'de' : 'hide'} style={{ color: theme.text }}>
                      {degree.button_text_de}
                    </p>
                  </div>
                </a>
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default DegreeCard;
