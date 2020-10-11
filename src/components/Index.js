import React from 'react';

function Index(props) {
    console.log(props)
    return (
        <div>
            <a href="/user-privacy">going to my safe zone</a>
            <button onClick={props.state.auth.login}>Login</button>
        </div>
    );
}

export default Index;
