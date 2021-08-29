import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/homepage.container";
import ShowUsers from "../containers/showUser.container";
import Layout from "../layout";

class AllRoute extends Component {
  render() {
    return (
      <Switch>
        {/* <Route exact strict path="/" component={Auth} /> */}
        <Layout>
        <Route exact strict path="/" component={Home} />
        <Route exact strict path="/showusers" component={ShowUsers}/>
        </Layout>
      </Switch>
    );
  }
}

export default AllRoute;
