import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home/";
import About from "../pages/About/";
import BlogPost from "../pages/Post";
import React from "react";

export default Router => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* both /roster and /roster/:number begin with /roster */}
      <Route path="/about" component={About} />
      <Route path="/category/:cat" component={Home} />
      <Route exact path="/:cat/:title" component={BlogPost} />
    </Switch>
  );
};
