import React from 'react';
import { useEffect } from 'react';
import Auth from '../Auth';

function Transition(props) {

    useEffect(() => {
        const auth = new Auth()
        auth.validate()
    }, [])
    return (
        <div>
            I will take you to your privacy room.<br />
            Please wait.............
        </div>
    );
}

export default Transition;
