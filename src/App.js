import React from 'react';
import "./App.css"
import {Provider} from 'react-redux';
import {store} from './redux/store'

import GithubSearchApp from "./components/GithubSearchApp";


let App = ()=>{

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary text-white">
                <div className="container">
                    <a href="#" className="navbar-brand">GitHub Profile Search  Application</a>
                </div>
            </nav>



            <Provider store={store}>
                <GithubSearchApp/>
            </Provider>



        </React.Fragment>
    );
};


export default App;
