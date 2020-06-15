// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
 
// Configure Firebase.
const config = {
  apiKey: process.env.APP_KEY,
  authDomain: process.env.DOMAIN,
  // ...
};
firebase.initializeApp(config);
 
export default class SignIn extends React.Component {
 
  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };
 
  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };
 
  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
 
  render() {
    if (!this.state.isSignedIn) {
      return (
        <div className="container ">
           <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <h1 className="text-center">Store</h1>
                        <p className=" text-center">Please sign-in:</p>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
                    </div>
                </div>
           </div>
        </div>
      );
    }
    return (
      <div>
        <h1>Store</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}