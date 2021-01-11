import React from 'react';
import {GoogleLogin} from 'react-google-login';

const clientId = '992813111921-9t3j7kh7vd4b77aren96cct2d38ebdsh.apps.googleusercontent.com';

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);

    };

    const onFailure = (res) => {
        console.log('[Login Failed] res:', res);
    };

    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{marginTop: '100px' }}
            isSignedIn={true}
            />
        </div>
        
    );
};

    


export default Login;