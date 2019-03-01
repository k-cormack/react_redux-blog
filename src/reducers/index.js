import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers({
    posts: postReducer,                //changeMe: () => 9999  // Dummy reducer here if desired
    users: usersReducer
});