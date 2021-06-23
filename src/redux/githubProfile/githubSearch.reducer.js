import * as githubSearchAction from './githubSearch.action';
//features kay
export const githubSearchFeaturesKey = 'githubSearch';


//initial state

let initialState = {
    loading : false,
    profile:{},
    repos : [],
    errorMessage :''
};


//reducer function
export  const reducer =(state = initialState , action)=>{
    let {type , payload} = action;
    switch (type){
        //profile
        case githubSearchAction.FETCH_PROFILE_INFO_REQUEST:
            return{
                ...state,
                loading:true
            };
        case githubSearchAction.FETCH_PROFILE_INFO_SUCCESS:
            return{
                ...state,
                loading:false,
                profile:payload
            };
        case githubSearchAction.FETCH_PROFILE_INFO_FAILURE:
            return{
                ...state,
                loading:false,
                errorMessage:payload
            };
            //repos
        case githubSearchAction.FETCH_REPOS_INFO_REQUEST :
            return{
                ...state,
                loading : true
            };
        case githubSearchAction.FETCH_REPOS_INFO_SUCCESS:
            return{
                ...state,
                loading:false,
                repos:payload
            };
        case githubSearchAction.FETCH_REPOS_INFO_FAILURE:
            return{
                ...state,
                loading:false,
                errorMessage :payload
            };
        default :return state;
    }
};