// Certifications.js
import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { useSelector } from 'react-redux';


const Certifications = ({ theme, store }) => {
  const lang = useSelector(state => state.language.currentLang);
  console.log("1st: ",lang);
  console.log("qst: ", store);

  return (
        <div className="main" id="certs">
          <div className="certs-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="certs-header" style={{ color: theme.text, opacity: lang === 'en' ? 1 : 0, transition: 'opacity 400ms'}}>
                Awards
              </h1>
              <h1 className="certs-header" style={{ color: theme.text, opacity: lang === 'ru' ? 1 : 0, transition: 'opacity 400ms'}}>
                Награды
              </h1>
              <h1 className="certs-header" style={{ color: theme.text, opacity: lang === 'de' ? 1 : 0, transition: 'opacity 400ms'}}>
                Awards
              </h1>
            </Fade>
          </div>
          <div className="certs-body-div">
            {certifications.certifications.map((cert) => {
              return <CertificationCard key={cert.id} lang={lang} certificate={cert} theme={theme} />;
            })}
          </div>
        </div>
)}

export default Certifications;
