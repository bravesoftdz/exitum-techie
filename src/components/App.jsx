import React from "react";
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import Protected from './Routes/Protected'
// components
import Home from './Pages/Home'
import Register from "./Auth/Register";

const App = () => (
  <Router>
      <Switch>
        <Protected path="/" exact component={Home}/>
        <Protected path="/register" component={Register}/>
      </Switch>
  </Router>
)
 
export default App;