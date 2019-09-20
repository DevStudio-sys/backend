import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import reduxThunk from "redux-thunk";
import Cookies from "js-cookie";

import App from "./components/app";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Account from "./components/account";
import Signin from "./components/auth/signin";
import RequireAuth from "./components/auth/require_auth";
import reducers from "./reducers";
import { AUTH_USER } from "./actions/types";

import "../style/style.scss";

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const token = Cookies.get("token");

// if we have a token, consider the user to be signed in
if (token) {
  store.dispatch({ type: AUTH_USER });
}
ReactDOM.render(
  <Provider store={store}>
    <HashRouter hashType="noslash">
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={RequireAuth(Dashboard)} />
          <Route path="/account" component={RequireAuth(Account)} />
          <Route path="/signin" component={Signin} />
        </Switch>
      </App>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);
