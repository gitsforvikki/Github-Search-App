import Axios from 'axios';
import {CLIENT_ID , CLIENT_SECRET} from '../../component/GithubCredentials';

export const FETCH_USER_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USERS_FAILURE';

export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';


export const fetchUser = (username)=>{
    return async (dispatch)=>{
        try{
            dispatch({type:FETCH_USER_REQUEST});
            let dataURL = `https://api.github.com/users/${username}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
            let response = await Axios.get(dataURL);
            dispatch({type : FETCH_USER_SUCCESS , payload : response.data})
        }
        catch(error){
            dispatch({type : FETCH_USER_FAILURE , payload : error})
        }
    }
}


export const fetchRepos = (username)=>{
    return async (dispatch)=>{
        try{
            dispatch({type:FETCH_REPOS_REQUEST});
            let dataUrl =`https://api.github.com/users/${username}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
            let response = await Axios.get(dataUrl);
            dispatch({type : FETCH_REPOS_SUCCESS , payload : response.data})
        }
        catch(error){
            dispatch({type : FETCH_REPOS_FAILURE , payload : error})
        }
    }
}