import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebaseConfig';
import '../assets/css/Login.css';
import axios from "axios";
import { Link } from 'react-router-dom';


const firebaseApp = firebase.initializeApp(firebaseConfig);
const url = 'http://localhost:3306/api/v1/users/';

class Login extends Component {

    state = {
        data:[],
        modalInsert: false,
        modalDelete: false,
        form:{
            _id: '',
            name: '',
            lastname: '',
            email: '',
            role: '',
            enabled: '',
            permissionCreate: '',
            permissionEdit: '',
            permissionDelete: ''
            //modalType: ''
        }
    }

    peticionGet=()=>{
        axios.get(url+this.state.form._id).then(response=>{
            this.setState({data: response.data});
            console.log(response.data);
        }).catch(error=>{
            console.log(error.message);
        })
    }


    //Firebase
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
                ? <p>{user.email}</p>
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