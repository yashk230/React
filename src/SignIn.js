import React, { useState } from 'react';

function SignIn() {
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleSignIn = () => {
        setIsSignedIn(true);
    };

    const handleSignOut = () => {
        setIsSignedIn(false);
    };

    return (
        <div>
        {isSignedIn ? (
            <div>
            <h1>Hello, Welcome in Home Page</h1>
            <button onClick={handleSignOut}>Sign Out</button>
            </div>
        ) : (
            <div>
            <h1>Please sign in first</h1>
            <button onClick={handleSignIn}>Sign In</button>
            </div>
        )}
        </div>
    );
}

export default SignIn;
