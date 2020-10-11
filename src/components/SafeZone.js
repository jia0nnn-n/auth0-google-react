import React from 'react';

function SafeZone(props) {
    return (
        <div>
            <p>This entry let user do some private actions.</p>
            <button onClick={props.state.auth.logout}>Logout</button>
        </div>
    );
}

export default SafeZone;
