export const LikeReducer = (arr = [], action) => {
  switch(action.type) {
    
    case "USER_LIKED" :
      arr.push({liked: true, name: action.userFullName });
      return arr

    default: return arr;
  }
}

  