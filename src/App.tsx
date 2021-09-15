import React from 'react';
import './index.css';
import Footer from './Footer';
import Home from './Home'; 
import Connexion from './Connexion';
import Inscription from './Inscription';
import Main from './Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/connexion">
              <Connexion />
            </Route>
            <Route path="/inscription">
              <Inscription />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
