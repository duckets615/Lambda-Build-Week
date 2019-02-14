import axios from 'axios';

//---------------------------------------CRUD for stories----------------------------

export const FETCHING_STORIES_START = 'FETCHING_STORIES_START';
export const FETCHING_STORIES_SUCCESS = 'FETCHING_STORIES_SUCCESS';
export const FETCHING_STORIES_FAILURE = 'FETCHING_STORIES_FAILURE';

export const fetchStories = () => dispatch => {
    dispatch({ type: FETCHING_STORIES_START })
    axios.get('https://remarkable-story-backend.herokuapp.com/api/stories')
        .then(res => dispatch({ type:FETCHING_STORIES_SUCCESS , payload:res.data }))
        .catch(err => dispatch({ type:FETCHING_STORIES_FAILURE , payload:err }))
}

export const CREATE_STORY_START = 'CREATE_STORY_START';
export const CREATE_STORY_SUCCESS = 'CREATE_STORY_SUCCESS';
export const CREATE_STORY_FAILURE = 'CREATE_STORY_FAILURE';

export const createStory = (token,storyInfo) => dispatch => {
    dispatch({ type:CREATE_STORY_START })
    axios.post('https://remarkable-story-backend.herokuapp.com/api/stories', storyInfo, {headers: {
        Authorization: token
    }})
        .then(res => dispatch({ type:CREATE_STORY_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:CREATE_STORY_FAILURE, payload:err }))
}

export const DELETE_STORY_START = 'DELETE_STORY_START';
export const DELETE_STORY_SUCCESS = 'DELETE_STORY_SUCCESS';
export const DELETE_STORY_FAILURE = 'DELETE_STORY_FAILURE';

export const deleteStory = (id,token) => dispatch => {
    dispatch({ type:DELETE_STORY_START })
    axios.delete(`https://remarkable-story-backend.herokuapp.com/api/stories/${id}`,{headers: {
        Authorization: token
    }})
        .then(res => dispatch({ type:DELETE_STORY_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:DELETE_STORY_FAILURE, payload:err }))
}

export const UPDATE_STORY_START = 'UPDATE_STORY_START';
export const UPDATE_STORY_SUCCESS = 'UPDATE_STORY_SUCCESS';
export const UPDATE_STORY_FAILURE = 'UPDATE_STORY_FAILURE';

export const startUpdatingStory = storyData => {
    return{
        type: UPDATE_STORY_START,
        payload: storyData
    }
}

export const updateStory = (token, storyInfo) => dispatch => {
    axios.put(`https://remarkable-story-backend.herokuapp.com/api/stories/${storyInfo.id}`, storyInfo, {headers: {Authorization: token}})
        .then(res => dispatch({ type:UPDATE_STORY_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:UPDATE_STORY_FAILURE, payload:err }))
}

export const FETCH_MY_STORIES_START = 'FETCH_MY_STORIES_START';
export const FETCH_MY_STORIES_SUCCESS = 'FETCH_MY_STORIES_SUCCESS';
export const FETCH_MY_STORIES_FAILURE = 'FETCH_MY_STORIES_FAILURE';

export const fetchMyStories = (token, id) => dispatch => {
    dispatch({ type: FETCH_MY_STORIES_START })
    axios.get(`https://remarkable-story-backend.herokuapp.com/mystories/${id}`, {headers: {Authorization: token}})
        .then(res => dispatch({ type:FETCH_MY_STORIES_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:FETCH_MY_STORIES_FAILURE, payload:err }))
}
//---------------------------------------Donations----------------------------

export const ADD_DONATION_START = 'ADD_DONATION_START'
export const ADD_DONATION_SUCCESS = 'ADD_DONATION_SUCCESS'
export const ADD_DONATION_FAILURE = 'ADD_DONATION_FAILURE'

export const addDonation = donationInfo => dispatch => {
    dispatch({ type:ADD_DONATION_START })
    axios.post('https://remarkable-story-backend.herokuapp.com/api/donations', donationInfo)
        .then(res => dispatch({ type:ADD_DONATION_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:ADD_DONATION_FAILURE, payload:err }))
}

export const FETCH_DONATION_START = 'FETCH_DONATION_START';
export const FETCH_DONATION_SUCCESS = 'FETCH_DONATION_SUCCESS';
export const FETCH_DONATION_FAILURE = 'FETCH_DONATION_FAILURE';

export const fetchDonations = () => dispatch => {
    dispatch({ type: FETCH_DONATION_START })
    axios.get('https://remarkable-story-backend.herokuapp.com/api/donations')
        .then(res => dispatch({ type:FETCH_DONATION_SUCCESS, payload:res.data }))
        .catch(err => dispatch({ type:FETCH_DONATION_FAILURE, payload:err }))
}

//---------------------------------------Authentication----------------------------

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const signUp = userInfo => dispatch => {
    dispatch({ type:SIGN_UP_START })
    axios.post('https://remarkable-story-backend.herokuapp.com/api/register', userInfo)
        .then(res => dispatch({ type:SIGN_UP_SUCCESS ,payload:res.data }))
        .catch(err => dispatch({ type:SIGN_UP_FAILURE ,payload:err }))
}

export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const login = userInfo => dispatch => {
    dispatch({ type:LOG_IN_START })
    axios.post('https://remarkable-story-backend.herokuapp.com/api/login', userInfo)
        .then(res => dispatch({ type:LOG_IN_SUCCESS, payload:res.data }))
        .catch(err =>  dispatch({ type:LOG_IN_FAILURE, payload:err }))
}