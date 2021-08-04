import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login"
import Menu from "./Pages/Menu"

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"><Login /></Route>
            <Route path="/Login"><Login /></Route>
            <Route path="/Menu"><Menu /></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;