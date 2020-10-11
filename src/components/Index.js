import React from 'react';

function Index(props) {
    console.log(props)
    return (
        <div>
            <p>Hello</p>
            <a href="/user-privacy">Go to my safe zone</a> :

            {!props.state.auth.isAuthenticated() &&
                <button onClick={props.state.auth.login}>Go Login First</button>
            }
        </div>
    );
}

export default Index;
