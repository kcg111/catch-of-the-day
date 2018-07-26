import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Components
import App from "./App";
import StorePicker from "./StorePicker";
import NotFound from "./NotFound";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StorePicker} />
          <Route path="/store/:storeId" component={App} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
