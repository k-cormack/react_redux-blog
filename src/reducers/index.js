import { combineReducers } from 'redux';
import postReducer from './postsReducer';


export default combineReducers({
    posts: postReducer,                //changeMe: () => 9999  // Dummy reducer here if desired
});