import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import page components
import Home from "./pages/Home";
import AddBird from "./pages/AddBird";
import Map from "./pages/Map";
import Account from "./pages/Account";
import Encyclopedia from "./pages/Encyclopedia";
import Login from "./pages/Login";
import {auth} from "./firebase/firebaseConfig";

// Import css
import './App.css';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.user = {};
    }

    render() {
        return (
            <div>
                <h1>Birdy</h1>
                {console.log("User    " + this.user)}
                <Router>
                    <div>

                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/add-bird">
                                <AddBird />
                            </Route>
                            <Route path="/map">
                                <Map />
                            </Route>
                            <Route path="/encyclopedia">
                                <Encyclopedia />
                            </Route>
                            <Route path="/map">
                                <Map />
                            </Route>
                            <Route path="/account">
                                <Account />
                            </Route>
                            <Route path="/login">
                                <Login user={this.user} />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
