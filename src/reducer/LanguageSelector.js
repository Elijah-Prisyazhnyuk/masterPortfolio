import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentLang } from './LanguageActions';


const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const currentLang = useSelector(state => state.language.currentLang);
  const dispatch = useDispatch();

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
    dispatch(setCurrentLang(newLang));
    localStorage.setItem('currentLang', newLang);
    setIsDropdownOpen(false); // Закрыть панель после выбора языка
  };

  return (
    <div className={`switch ${isDropdownOpen ? 'anim-options ' : ''}`}>
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
  );
};

 

export default LanguageSelector;
