import React from 'react';
import { login, isAuthenticated } from '../Auth';

function Index(props) {
    return (
        <div>
            <p>Hello {props.state.name}!</p>
            <a href="/user-privacy">Go to my safe zone</a>

            {
                !isAuthenticated() && <button onClick={login}>Go Login First</button>
            }
        </div>
    );
}

export default Index;
