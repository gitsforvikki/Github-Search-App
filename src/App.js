import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import GithubProfileSearch from './component/GithubProfileSearch';

import { store } from './redux/store';


let App =()=>{

  return (
    <React.Fragment>
      
        <Provider store={store}>
            <GithubProfileSearch/>
        </Provider>

    </React.Fragment>
  );
}
   
export default App;
