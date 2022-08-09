import React from "react";
import { useSelector } from "react-redux";
import * as githubSearchReducer from "../../redux/githubSearch/githubSearch.reducer";
import spinner from '../../assets/img/spinner.png';


let GithubProfileDetails = ()=>{

    let usersInfo = useSelector((state)=>{
        return  state[githubSearchReducer.githubSearchFraturesKey];
 })

 let {loading , user , repos , errorMessage} = usersInfo;
    return(
        <React.Fragment>
                {
                    loading ?
                        <React.Fragment>
                            <img src={spinner} className="d-block m-auto" alt=""/>
                        </React.Fragment> :
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-success mx-2">{user.followers} Followers</span>
                                <span className="badge badge-warning mx-2">{user.public_repos} Repos</span>
                                <span className="badge badge-secondary mx-2">{user.public_gists} Gists</span>
                                <span className="badge badge-danger mx-2">{user.following} Following</span>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        NAME : <span className="font-weight-bold">{user.name}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Location : <span>{user.location}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Email : <span>{user.email}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Company : <span>{user.company}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Blog : <span>
                                <a href={user.blog} target="_blank">Blog</a>
                            </span>
                                    </li>
                                    <li className="list-group-item">
                                        Member Since : <span>{user.created_at}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Profile URL : <span>
                                <a href={user.html_url} target="_blank">{user.html_url}</a>
                            </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                }
            </React.Fragment>
    )
}
export default GithubProfileDetails;