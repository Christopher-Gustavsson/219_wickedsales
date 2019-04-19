import React, {Component} from 'react';
import './sign_out.scss';
import {connect} from 'react-redux';
import {signOut} from '../../../actions';
//import connect and the sign out action creator

class SignOut extends Component {

    componentDidMount(){
        // action creator for sign out, dont forget connect, see sign_in
        this.props.signOut();

    }

    render(){
        return(
            <div className="sign-out">
                <div className="sign-out-header center">
                    <h1 className="center">Thank you for visiting our site</h1>
                    <h2 className="center">You have been signed out</h2>
                </div>
                
            </div>
        );
    }
}

// user connect to add sign out action creator to components props
export default connect(null, {
    signOut: signOut
})(SignOut);