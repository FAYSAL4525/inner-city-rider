import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import Header from '../components/Header/Header';
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const LogIn = () => {
    const handleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var user = result.user;
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }
    return (
        <div>
            <Header></Header>
            <h1>this is login page</h1>
            <button onClick={handleSignIn}>SignIn</button>
        </div>
    );
};

export default LogIn;