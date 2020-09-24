import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import HomeComponent from './components/home';
import AddNew from './components/addNew';

import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomeComponent}></Route>
            <Route path="/addNew" component={AddNew}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    
  );
}


export default App;
