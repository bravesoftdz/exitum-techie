import React from "react";
import { BrowserRouter as Router,Switch } from 'react-router-dom';
import Protected from './Routes/Protected'
// components
import Home from './Pages/Home'

const App = () => (
  <Router>
      <Switch>
        <Protected path="/" exact component={Home}/>
      </Switch>
  </Router>
)
 
export default App;