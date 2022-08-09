import { combineReducers } from "redux"; 
import * as githubSearchReducer from '../redux/githubSearch/githubSearch.reducer';
export const rootReducer = combineReducers({
    
    [githubSearchReducer.githubSearchFraturesKey] : githubSearchReducer.reducer

});