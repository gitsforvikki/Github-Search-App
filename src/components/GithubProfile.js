import React from 'react';
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

let GithubProfile =()=>{
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">

                    {/*githubProfileCard*/}
                    <div className="col-md-3">
                        <GithubProfileCard/>
                    </div>

                    {/*githubProfileDetails*/}
                    <div className="col-md-9">
                        <GithubProfileDetails/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export  default GithubProfile