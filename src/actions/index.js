import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';


export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get('/posts');

    
    dispatch({ type: 'FETCH_POSTS', payload: response.data });
  };
};

//the above can be refactored to look like:
//  export const fetchPosts = () => async dispatch => {
//     const response = await jsonPlaceholder.get('/posts');  
//     dispactch ({ type: 'FETCH_POSTS', payload: response })
//  };

// export const fetchUser = (id) => {
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({ type: 'FETCH_USER', payload: response.data });
//   };
// };

// WITHOUT lodash/memoize above, WITH lodash/memoize below

export const fetchUser = (id) => {
  return function(dispatch, getState) {
    _fetchUser(id, dispatch);
  };
};

  const _fetchUser = _.memoize(async(id, dispatch) => {    // NOTICE the movement of the async parameter
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data });
});