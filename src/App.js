import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import './App.css';
import MainPage from './Pages/MainPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import DemonstrationPage from './Pages/DemonstrationPage/DemonstrationPage';

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact><MainPage/></Route>
          <Route path="/Demonstration/:id" ><DemonstrationPage/></Route>
        </Switch>
      </Router>
    );
}

export default App;


