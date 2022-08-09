import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import GithubProfileCard from './githubProfile/GithubProfileCard';
import GithubProfileDetails from './githubProfile/GithubProfileDetails';
import * as githubSearchActions from '../redux/githubSearch/githubSearch.actions';
import * as githubSearchReducer from '../redux/githubSearch/githubSearch.reducer';
import GithubRepos from './githubRepos/GithubRepos';


let GithubProfileSearch =()=>{
    let dispatch = useDispatch();

    let [username , setUsername] = useState('');
    

    let submitUserName=(event)=>{
        event.preventDefault();
        dispatch(githubSearchActions.fetchUser(username));
        dispatch(githubSearchActions.fetchRepos(username));
    
    }

    let usersInfo = useSelector((state)=>{
           return  state[githubSearchReducer.githubSearchFraturesKey];
    })

    let {loading , user , repos , errorMessage} = usersInfo;
    return (
        <React.Fragment>
            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-secondary">Github Search App</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={submitUserName} className="form-inline">
                                <div className="form-group">
                                    <input onChange={(e)=> setUsername(e.target.value)} type="text"  value={username} className="form-control" placeholder="Username"/>
                                </div>
                                <input type="submit" className="btn btn-secondary btn-sm"  />
                            </form>
                            <hr/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {
                                Object.keys(user).length > 0 ?
                                <React.Fragment>
                                    <GithubProfileCard/>
                                </React.Fragment> : null
                            }
                        </div>
                        <div className="col-md-9">
                        {
                                Object.keys(user).length > 0 ?
                                <React.Fragment>
                                    <GithubProfileDetails/>
                                </React.Fragment> : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                           {
                               repos.length >  0 ? 
                               <React.Fragment>
                                    <GithubRepos/>
                               </React.Fragment> : null
                           }
                        </div>
                    </div>
                </div>
            </section>
            
        </React.Fragment>
    )
}
export default GithubProfileSearch;

