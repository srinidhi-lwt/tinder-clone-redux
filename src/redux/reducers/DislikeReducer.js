export const DislikeReducer = (arr = [], action) => {
    switch(action.type) {
      
      case "USER_DISLIKED" :
        arr.push({liked: false, name: action.userFullName });
        return arr
  
      default: return arr;
    }
}  