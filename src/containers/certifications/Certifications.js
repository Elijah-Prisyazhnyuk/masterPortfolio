import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import { useLanguage } from "../../components/header/LanguageSelector";
import CertificationCard from "../../components/certificationCard/CertificationCard";

const Certifications = ({ theme }) => {
  const { currentLang } = useLanguage();

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
          return <CertificationCard key={cert.id} certificate={cert} lang={currentLang} theme={theme} />;
        })}
      </div>
    </div>
  );
};

export default Certifications;
