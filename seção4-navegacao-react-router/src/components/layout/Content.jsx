import "./Content.css";
import React from "react";
import {Switch, Route} from 'react-router-dom'

import About from "../../views/examples/About";
import Home from "../../views/examples/Home";
import Param from "../../views/examples/Param";
import NotFound from "../../views/examples/NotFound";

const Content = (props) => {
  return (
      <main className="Content">
        <Switch>
        <Route path="/about"  component={About}/>
        <Route path="/param/:id"  component={Param}/>
        <Route path="/" exact component={Home}/>
        <Route path="*" component={NotFound}/>
        </Switch>
      </main>
  );
};

export default Content;
