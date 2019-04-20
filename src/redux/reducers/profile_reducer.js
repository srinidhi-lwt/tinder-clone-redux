export const profileReducer = (userState = { 
  loading: false, 
  posts: null, 
  error: null}
  , action) => {
    action.data && console.log(action.data.results)
    switch(action.type) {
      
      case "USER_LOADING" : return {...userState, loading: true}
      case "USER_SUCCESS" : return {...userState, loading: false, users: action.data}
      case "USER_ERROR" : return {...userState, loading: false, error: action.err}

      default: return userState;
    }
}