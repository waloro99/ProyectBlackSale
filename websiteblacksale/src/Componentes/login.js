import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import '../assets/css/Login.css';

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
    render() {
    const {
        user,
        signOut,
        signInWithGoogle,
    } = this.props;
    return (
        <div className = "btnGoogle">
            {
            user
                ? <p>{user.displayName}</p>
                : <hr/>
            }
            {
            user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={signInWithGoogle} className="g">Sign in with Google</button>
            }
        </div>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login);