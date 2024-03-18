import React, { useState, useEffect } from 'react';

const LanguageSelector = ({ languages }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedLang, setSelectedLang] = useState(localStorage.getItem('currentLang') || 'en');
  
  const elRef = React.createRef();

  const handleOpenDropdown = () => {
    setShowOptions(true);
    setTimeout(() => {
      elRef.current.classList.add('anim-options');
    }, 50);
    setTimeout(() => {
      elRef.current.classList.add('show-shadow');
    }, 200);
  };

  const handleCloseDropdown = (newLang) => {
    elRef.current.classList.remove('anim-options');
    elRef.current.classList.remove('show-shadow');

    setSelectedLang(newLang);
    localStorage.setItem('currentLang', newLang);

    setTimeout(() => {
      setShowOptions(false);
    }, 600);
  };

  useEffect(() => {
    const lang = localStorage.getItem('currentLang') || 'en';
    setSelectedLang(lang);
  }, []);

  return (
    <div ref={elRef} className="switch">
    <div className="current" onClick={handleOpenDropdown}>
      <span>ru</span>
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
      <ul class="options-list">
        <li data-lang="en">English</li>
        <li data-lang="ru">Русский</li>
        <li data-lang="de">Deutsch</li>
      </ul>
      <div id="trans-circle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"> 
          <g id="circle" fill="none" fill-rule="evenodd"> 
            <circle id="bg" cx="60" cy="60" r="60" fill="#FFFFFF"/> 
          </g> 
        </svg>
      </div>
    </div>
  </div>
  );
};

export default LanguageSelector;
