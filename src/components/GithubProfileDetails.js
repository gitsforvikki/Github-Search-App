import React from 'react';
import {useSelector} from 'react-redux';
import * as githubSearchReducer from '../redux/githubProfile/githubSearch.reducer';

let GithubProfileDetails =()=>{

    //get data from redux store
    let gitUserInfo = useSelector((state)=>{
        return state[githubSearchReducer.githubSearchFeaturesKey];
    });
    let{loading ,profile } = gitUserInfo;


    return(
        <React.Fragment>
            <div className="card mt-3">
                <div className="card-header">
                    <span  className="badge badge-primary mr-3">{profile.followers}Followers</span>
                    <span  className="badge badge-secondary mr-3">{profile.public_repos}Repos </span>
                    <span  className="badge badge-primary mr-3">{profile.public_gists}Gist</span>
                    <span  className="badge badge-primary mr-3">{profile.following}Following</span>
                </div>
                <div className="card-body">
                    <div className="list-group">
                        <div className="list-group-item">
                            Name: <span className="font-weight-bold">{profile.name}</span>
                        </div>

                        <div className="list-group-item">
                            Email: <span>{profile.email}</span>
                        </div>
                        <div className="list-group-item">
                            Location: <span>{profile.location}</span>
                        </div>

                        <div className="list-group-item">
                            Company: <span>{profile.company}</span>
                        </div>

                        <div className="list-group-item">
                            Blog: <span>
                                <a href={profile.blog} target="_blank">Blog</a>
                            </span>
                        </div>

                        <div className="list-group-item">
                            Member since: <span>{profile.created_at}</span>
                        </div>
                        <div className="list-group-item">
                            Profile Url : <span >
                                <a href={profile.html_url} target="_blank">Profile</a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export  default GithubProfileDetails;