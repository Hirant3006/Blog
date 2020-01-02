import { Switch, Route } from "react-router-dom";
import Home from '../pages/Home/'
import About from '../pages/About'
import React from "react"; 

export default Router => {


  return (<Switch>
    <Route exact path="/" component={Home} />
    {/* both /roster and /roster/:number begin with /roster */}
    <Route path="/about" component={About} />
  </Switch>);
}
