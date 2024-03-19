/* global useContext */
import React, { createContext, useState, useEffect, useContext} from 'react';

export const LanguageContext = createContext();

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('currentLang') || 'en');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.switch')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const handleLangChange = (newLang) => {
    setCurrentLang(newLang);
    localStorage.setItem('currentLang', newLang);
    setIsDropdownOpen(false); // Закрыть панель после выбора языка
  };

  return (
    <LanguageContext.Provider value={{ currentLang, handleLangChange }}>
    <div className={`switch ${isDropdownOpen ? 'show-options anim-options show-shadow' : ''}`}>
      <div className="current" onClick={toggleDropdown}>
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
          <li onClick={() => handleLangChange('en')} className={currentLang === 'en' ? 'selected' : ''}>English</li>
          <li onClick={() => handleLangChange('ru')} className={currentLang === 'ru' ? 'selected' : ''}>Русский</li>
          <li onClick={() => handleLangChange('de')} className={currentLang === 'de' ? 'selected' : ''}>Deutsch</li>
        </ul>
        <div id="trans-circle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
            <g id="circle" fill="none" fillRule="evenodd">
              <circle id="bg" cx="60" cy="60" r="60" fill="#FFFFFF" />
            </g>
          </svg>
        </div>
      </div>
    </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
export default LanguageSelector;
