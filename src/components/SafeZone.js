import React from 'react';
import { logout } from '../Auth';

function SafeZone() {
    return (
        <div>
            <p>This entry let user do some private actions.</p>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default SafeZone;
