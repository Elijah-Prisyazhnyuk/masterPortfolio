import { configureStore } from 'redux/toolkit';
import rootReducer from './reducer';

const store = configureStore({ reducer: rootReducer })

export default store;
