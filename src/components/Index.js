import React from 'react';
import { login, isAuthenticated } from '../Auth';

function Index() {
    return (
        <div>
            <p>Hello</p>
            <a href="/user-privacy">Go to my safe zone</a> :

            {
                !isAuthenticated() && <button onClick={login}>Go Login First</button>
            }
        </div>
    );
}

export default Index;
