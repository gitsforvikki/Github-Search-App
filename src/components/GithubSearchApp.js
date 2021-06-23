import {useDispatch , useSelector} from 'react-redux';
import React, {useState} from 'react';
import * as githubSearchAction from '../redux/githubProfile/githubSearch.action';
import * as githubSearchReducer from '../redux/githubProfile/githubSearch.reducer';

import GithubProfile from "./GithubProfile";
import GithubRepos from "./GithubRepos";



let GithubSearchApp =()=>{


    let dispatch = useDispatch();

    let [githubUser , setGithubUser] = useState('');
    //bind function
    let enterUsername=(event)=>{
        setGithubUser(event.target.value);
    };


    let submitSearch = (event)=>{
            event.preventDefault();
            dispatch(githubSearchAction.fetchProfileInfo(githubUser));
            dispatch(githubSearchAction.fetchReposInfo(githubUser));
    };

    //fetch data from redux store
    let userInfo = useSelector((state)=>{
        return state[githubSearchReducer.githubSearchFeaturesKey];
    });

    //destructuring
    let {profile , repos} = userInfo;

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h2 text-secondary">Search Your Profile</p>
                        <p className="lead">GitHub Search Application! Using this application you can find out all the Public
                                             profile information and Repositories. You only need to enter the correct username
                                                of the guy and press the submit button. After that you will get all the information with nice user interface.</p>
                        <p className="lead">for example you can enter 'mdo' as a  github username,the Creator of Bootstrap.</p>
                    </div>
                </div><br/><hr/><br/>
                <div className="row">
                    <div className="col">
                        <form className="form-inline" onSubmit={submitSearch}>
                            <div className="form-group">
                                <input
                                    value={githubUser}
                                    onChange={enterUsername}
                                    type="search"  size="30" className="form-control" placeholder="Github username"/>
                            </div>
                            <input  type="submit" className="btn btn-secondary btn-sm" value="Submit"/>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(profile).length > 0 ?
                                <React.Fragment>
                                    <GithubProfile />
                                </React.Fragment> : null
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            repos.length > 0 ?
                                <React.Fragment>
                                    <GithubRepos />
                                </React.Fragment> : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export  default GithubSearchApp;