const initialState = {
    currentLang: localStorage.getItem('currentLang') || 'en'
  };
  
  const LanguageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CURRENT_LANG':
        return {
          ...state,
          currentLang: action.payload
        };
      default:
        return state;
    }
  };
  
  export default LanguageReducer;
  