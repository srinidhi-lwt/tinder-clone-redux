import axios from 'axios'

const userLoading = () => {
    return {
        type: "USER_LOADING"
    }
}

const userSuccess = (data) => {
    return {
        type: "USER_SUCCESS",
        data: data
    }
}

const userError = (err) => {
    return {
        type: "USER_ERROR",
        err: err
    }
}

export const getUserThunk = () => {
    return(dispatch) => {
        dispatch(userLoading());

        axios.get('https://randomuser.me/api')
        .then((response) => {
            dispatch(userSuccess(response.data.results))
        })
        .catch((err) => {
            dispatch(userError(err))
        })
    }
}

export const likePerson = (userFullName) => {
    return {
        type: "USER_LIKED",
        userFullName: userFullName
    }
}

export const DislikePerson = (userFullName) => {
    return {
        type: "USER_DISLIKED",
        userFullName: userFullName
    }
}