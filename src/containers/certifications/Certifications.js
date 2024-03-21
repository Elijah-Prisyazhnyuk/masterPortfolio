// Certifications.js
import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";


const Certifications = ({ theme,lang }) => {


  return (
        <div className="main" id="certs">
          <div className="certs-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="certs-header" style={{ color: theme.text, opacity: lang === 'en' ? 1 : 0, transition: 'opacity 400ms'}}>
                {certifications.h1[lang]}
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
