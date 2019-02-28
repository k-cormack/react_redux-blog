import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get('/posts');

    
    dispatch({ type: 'FETCH_POSTS', payload: response });
  };
};

//the above can be refactored to look like:
//  export const fetchPosts = () => async dispatch => {
//     const response = await jsonPlaceholder.get('/posts');  
//     dispactch ({ type: 'FETCH_POSTS', payload: response })
//  };
