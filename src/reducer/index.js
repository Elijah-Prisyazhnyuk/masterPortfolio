import { combineReducers } from 'redux';
import LanguageReducer from './LanguageReducer';

const rootReducer = combineReducers({
  language: LanguageReducer
});

export default rootReducer;
