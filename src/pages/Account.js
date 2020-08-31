import React, { Component } from 'react'
import Navigation from '../components/Navigation'
import {auth} from "../firebase/firebaseConfig";


export default class Account extends Component {
    logout = (e) =>{
        e.preventDefault();
        auth.signOut().then(function() {
            // Sign-out successful.
            console.log("Signed out");
        }).catch(function(error) {
            // An error happened.
            console.log(error);
        });

    }
    render() {
        return (
            <div>
                <form className="logout" onSubmit={this.logout}>
                    <button className="logout__button">Se déconnecter</button>
                </form>
                <Navigation />
            </div>
        )
    }
}
