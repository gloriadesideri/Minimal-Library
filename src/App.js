import React from 'react';
import './App.scss';
import Header from './components/Header'
import Footer from './components/Footer'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import Body from './components/Body/Body'
import NoMatch from "./views/NoMatch";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
      <Router>
        <div className="App">
          <Switch>
          <Route exact path={'/'} component={Body}/>
          <Route component={NoMatch}/>
            </Switch>

        </div>
      </Router>
  );
}

export default App;
