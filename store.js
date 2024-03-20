import { configureStore } from 'redux';
import rootReducer from './src/reducer';

const store = configureStore(rootReducer);

export default store;
