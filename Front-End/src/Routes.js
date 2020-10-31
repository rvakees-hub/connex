import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import Home from "./core/Home";
import Menu from "./core/Menu";
import PrivateRoute from './auth/PrivateRoute';
import Dashboard from './user/UserDashboard'
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard'
import Adminuser from './user/Adminuser'
import Form from "./core/Form";
import Join from "./core/Join";
import Profile from './user/Profile'






const Routes = () => {
    return(
        <BrowserRouter>
            <Menu/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/form" exact component={Form}/>
                <Route path="/join" exact component={Join}/>        
                <Route path="/signin" exact component={Signin}/>
                <Route path="/signup" exact component={Signup}/>
                <PrivateRoute path="/user/dashboard" exact component={Dashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard}/>
                <Route path="/admin/dashboard/user" exact component={Adminuser}/>
                <PrivateRoute path="/profile/:userId" exact component={Profile}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
