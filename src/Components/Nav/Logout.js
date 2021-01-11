import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '992813111921-9t3j7kh7vd4b77aren96cct2d38ebdsh.apps.googleusercontent.com';

function Logout() {
    const onSuccess = () => {
        alert('Logout Made Successfully');
    }

    return (
        <div>
            <GoogleLogout
            clientId={clientId}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
            ></GoogleLogout>
        </div>
    );
};

export default Logout;