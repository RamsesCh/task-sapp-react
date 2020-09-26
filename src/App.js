import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import TasksComponent from './components/tasks';
import AddNew from './components/addNew';
import Navbar from './components/navbar';


function App() {
  return (
    <BrowserRouter>
      <div className="bg-light min-height100">
        <Navbar/>
        <div className="container pt-45">
          <Switch>
            <Route path="/" exact component={TasksComponent}></Route>
            <Route path="/addNew" component={AddNew}></Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
    
  );
}


export default App;
