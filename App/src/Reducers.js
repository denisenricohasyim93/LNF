import { combineReducers } from 'redux-immutable';


// reducers import
import LoginReducer from './pages/Login/Reducer';

const rootReducers = combineReducers({
    login: LoginReducer
});
export default rootReducers;