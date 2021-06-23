import React from 'react';
import {useSelector} from 'react-redux';
import * as githubSearchReducer from "../redux/githubProfile/githubSearch.reducer";
import spinner from '../assets/image/spinner.gif';


let GithubRepos =()=>{
    //fetch data from redux store
    let userInfo = useSelector((state)=>{
        return state[githubSearchReducer.githubSearchFeaturesKey];
    });

    //destructuring
    let {loading ,repos} = userInfo;
    return(
        <React.Fragment>
            {
                loading ?
                    <React.Fragment>
                        <img src={spinner} className="d-block m-auto" alt=""/>
                    </React.Fragment> :
                    <React.Fragment>
                        <div className="card mt-3">
                            <div className="card-header">
                                <p className="leade">Your Reposetories</p>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    {
                                        repos.map(repo=>{
                                            return(
                                                <React.Fragment>
                                                    <li className="list-group-item">
                                                        <div className="d-flex justify-content-between">
                                                <span className="h5">
                                                    <a href={repo.html_url} target="_blank">{repo.name}</a>
                                                </span>
                                                            <span className="badge badge-success">{repo.stargazers_count} stars</span>
                                                            <span className="badge badge-primary">{repo.watchers_count} Watchers</span>

                                                        </div>
                                                    </li>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </React.Fragment>
            }


        </React.Fragment>
    )
};
export  default GithubRepos;