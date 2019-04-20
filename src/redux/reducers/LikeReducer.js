export const LikeReducer = (arr = [], action) => {
  switch(action.type) {
    
    case "USER_LIKED" :
      arr.push({liked: true, name: action.userFullName });
      console.log(arr)
      return arr

    default: return arr;
  }
}

  