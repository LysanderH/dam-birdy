import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {auth} from "../firebase/firebaseConfig";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            password: null,
            loggedIn: false,
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.checkUser();
    }
    changeHandler = (e) => {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});

    }
    checkUser = () => {
        this.props.user = auth.signInWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
        auth.onAuthStateChanged((user) => {
            // console.log(user);
            // user = auth.currentUser;
            if (user){
                this.setState({loggedIn: true})
               // this.props.user.name = user.displayName;
               // this.props.user.email = user.email;
               // this.props.user.photo = user.photoURL;
            } else {
                this.setState({loggedIn: false})
            }
        })
    }
    render() {
        return (
            <section className="login">
                {console.log("User    " + auth.currentUser)}

                <h2 className="login__heading">Login</h2>
                <form onSubmit={this.submitHandler} className="form">
                    <label htmlFor="email" className="form__label">Email</label>
                    <input type="email" id="email" className="form__input" name="email" placeholder="example@mail.com"
                           value={this.state.email} onChange={this.changeHandler}/>
                    <label htmlFor="password" className="form__label">Mot de passe</label>
                    <input type="password" id="password" className="form__input" name="password"
                           value={this.state.password} onChange={this.changeHandler}/>
                    <button type="submit">Se connecter</button>
                </form>

                <Link to="/register" className="login__link">Créer un compte</Link>
                <Link to="/forgot-password" className="login__link">J'ai oublié mon mot de passe</Link>
            </section>
        );
    }
}

export default Login;