import React from 'react';
import { login, isAuthenticated } from '../Auth';
import { PROJECT_NAME } from '../constant'

function Index(props) {
    return (
        <div>
            <p>Hello {props.state.name}!</p>
            <a href={`${PROJECT_NAME}/user-privacy`}>Go to my safe zone</a>
            {
                !isAuthenticated() && <button onClick={login}>Go Login First</button>
            }
        </div>
    );
}

export default Index;
