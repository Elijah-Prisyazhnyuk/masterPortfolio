// Certifications.js
import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";
import { useSelector } from 'react-redux';

const Certifications = ({ theme }) => {
  const currentLang = useSelector(state => state.language.currentLang);

  return (
        <div className="main" id="certs">
          <div className="certs-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="certs-header" style={{ color: theme.text }}>
                Awards
              </h1>
            </Fade>
          </div>
          <div className="certs-body-div">
            {certifications.certifications.map((cert) => {
              return <CertificationCard key={cert.id} currentLang={currentLang} certificate={cert} theme={theme} />;
            })}
          </div>
        </div>
)}

export default Certifications;
