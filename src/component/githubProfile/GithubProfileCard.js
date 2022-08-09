import React from "react";
import { useDispatch , useSelector } from "react-redux";
import * as githubSearchReducer from '../../redux/githubSearch/githubSearch.reducer';
import spinner from '../../assets/img/spinner.png';

let GithubProfileCard = ()=>{
    let dispatch = useDispatch();

    let usersInfo = useSelector((state)=>{
        return  state[githubSearchReducer.githubSearchFraturesKey];
     });

 let {loading , user , repos , errorMessage} = usersInfo;



    return(
        <React.Fragment>
            <React.Fragment>
                {
                    loading ?
                        <React.Fragment>
                            <img src={spinner} className="d-block m-auto" alt=""/>
                        </React.Fragment> :
                        <div className="card">
                            <img src={user.avatar_url} alt="" className="img-fluid"/>
                            <div className="card-body">
                                <p className="h4">{user.name}</p>
                                <small>{user.bio}</small><br/>
                                <a href={user.html_url} target="_blank" className="btn btn-success btn-sm">Profile</a>
                            </div>
                        </div>
                }
            </React.Fragment>
        </React.Fragment>
    )
}
export default GithubProfileCard;