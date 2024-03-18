import React, { useState} from 'react';

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || 'en');
  
  const handleLangChange = (newLang) => {
    setCurrentLang(newLang);
    localStorage.setItem('currentLang', newLang);
  };
  
 
  return (
      <div className="switch">
        <div className="current">
          <span>{currentLang}</span>
          <em className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <title>ic_arrow_drop_down_18px</title>
              <g fill="#FFFFFF">
                <path d="M5 8l4 4 4-4z"></path>
              </g>
            </svg>
          </em>
        </div>
        <div className="options">
          <ul className="options-list">
            <li onClick={() => handleLangChange('en')}>English</li>
            <li onClick={() => handleLangChange('no')}>Bokmål Norsk</li>
            <li onClick={() => handleLangChange('sv')}>Svenska</li>
            <li onClick={() => handleLangChange('ru')}>Русский</li>
            <li onClick={() => handleLangChange('es')}>Español</li>
          </ul>
          <div id="trans-circle"> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"> 
              <g id="circle" fill="none" fillRule="evenodd"> 
                <circle id="bg" cx="60" cy="60" r="60" fill="#FFFFFF"/>
              </g> 
            </svg>
          </div>
        </div>
      </div>
  );
};

export default LanguageSelector;
