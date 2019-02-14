import { combineReducers } from 'redux';
import { storyReducer } from './storyReducer';
import { authenticationReducer } from './authenticationReducer';
//import { donationsReducer } from './donationsReducer';

export default combineReducers({
    storyReducer,
    authenticationReducer,
    //donationsReducer
})