import * as githubSearchActions from './githubSearch.actions';

export const githubSearchFraturesKey = 'githubSearch';

let initialState ={
    loading : false,
    user:{},
    repos:[],
    errorMessage:''
}

export const reducer = (state = initialState , actions)=>{
    let {type , payload } = actions;
    switch (type) {
        case githubSearchActions.FETCH_USER_REQUEST :
            return {
                ...state,
                loading:true
            };
        case githubSearchActions.FETCH_USER_SUCCESS:
            return{
                ...state,
                user : payload,
                loading: false
            };
        case githubSearchActions.FETCH_USER_FAILURE:
            return{
                ...state,
                errorMessage :payload,
                loading:false
            };
            
        case githubSearchActions.FETCH_REPOS_REQUEST:
            return{
                ...state,
                loading:true
            };
        case githubSearchActions.FETCH_REPOS_SUCCESS:
            return {
                ...state,
                loading : false,
                repos : payload
            };
        case githubSearchActions.FETCH_REPOS_FAILURE :
            return{
                ...state,
                loading :false,
                errorMessage : payload
            }

        default : return state;
    }
}
