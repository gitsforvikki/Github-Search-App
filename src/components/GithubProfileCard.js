import React from 'react';
import {useSelector} from 'react-redux';
import * as githubSearchReducer from "../redux/githubProfile/githubSearch.reducer";
import spinner from '../assets/image/spinner.gif';
let GithubProfileCard =()=>{

    //fetch data from redux store
    let userInfo = useSelector((state)=>{
        return state[githubSearchReducer.githubSearchFeaturesKey];
    });

    //destructuring
    let {loading , profile} = userInfo;


    return(
        <React.Fragment>
            {
                loading ?
                    <React.Fragment>
                        <img src={spinner} className="d-block m-auto" alt=""/>
                    </React.Fragment> :
                    <React.Fragment>
                        <div className="card mt-3">
                            <img src={profile.avatar_url} alt="" className="img-fluid"/>
                            <div className="card-body">
                                <p className="h3">{profile.name}</p>
                                <small>{profile.bio}</small>
                                <a href={profile.html_url} target="_blank" className="btn btn-success btn-sm">Profile</a>
                            </div>
                        </div>
                    </React.Fragment>
            }
        </React.Fragment>
    )
};
export  default GithubProfileCard;