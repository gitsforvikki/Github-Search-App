import React from 'react';
import "./App.css"
import {Provider} from 'react-redux';
import {store} from './redux/store'
import {Link , BrowserRouter as Router} from 'react-router-dom';

import GithubSearchApp from "./components/GithubSearchApp";


let App = ()=>{

    return (
        <React.Fragment>
           <Router>
            <nav className="navbar navbar-expand-sm navbar-dark bg-secondary text-white">
                <div className="container">
                    <Link to="/" className="navbar-brand">GitHub Profile Search  Application</Link>
                </div>
            </nav>
            </Router>



            <Provider store={store}>
                <GithubSearchApp/>
            </Provider>



        </React.Fragment>
    );
};


export default App;
