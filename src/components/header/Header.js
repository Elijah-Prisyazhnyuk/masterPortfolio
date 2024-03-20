import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import LanguageSelector from '../../reducer/LanguageSelector.js';

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    const lang = this.props.lang;
    console.log("lg: ", this.props.lang);
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <span id={lang === 'en' ? 'en' : 'hide'}>Home</span>
                  <span id={lang === 'ru' ? 'ru' : 'hide'}>Главная</span>
                  <span id={lang === 'de' ? 'de' : 'hide'}>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                 <span id={lang === 'en' ? 'en' : 'hide'}>Education</span>
                 <span id={lang === 'ru' ? 'ru' : 'hide'}>Образование</span>
                 <span id={lang === 'de' ? 'de' : 'hide'}>Ausbildung</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <span id={lang === 'en' ? 'en' : 'hide'}>Experience</span>
                  <span id={lang === 'ru' ? 'ru' : 'hide'}>Опыт</span>
                  <span id={lang === 'de' ? 'de' : 'hide'}>Erfahrung</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <span id={lang === 'en' ? 'en' : 'hide'}>Projects</span>
                  <span id={lang === 'ru' ? 'ru' : 'hide'}>Проекты</span>
                  <span id={lang === 'de' ? 'de' : 'hide'}>Vorhaben</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hobby"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                > 
                  <span id={lang === 'en' ? 'en' : 'hide'}>Hobby & Interests</span>
                  <span id={lang === 'ru' ? 'ru' : 'hide'}>Увлечения и Интересы</span>
                  <span id={lang === 'de' ? 'de' : 'hide'}>Hobbys & Interessen</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  <span id={lang === 'en' ? 'en' : 'hide'}>Contact Me</span>
                  <span id={lang === 'ru' ? 'ru' : 'hide'}>Контакты</span>
                  <span id={lang === 'de' ? 'de' : 'hide'}>Kontaktieren</span>
                </NavLink>
              </li>
            </ul>
            <LanguageSelector/>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
