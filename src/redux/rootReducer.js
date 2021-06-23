import {combineReducers} from 'redux';
import * as githubSearchReducer from '../redux/githubProfile/githubSearch.reducer';
const rootReducer = combineReducers({
        [githubSearchReducer.githubSearchFeaturesKey] : githubSearchReducer.reducer
    });
export {rootReducer};