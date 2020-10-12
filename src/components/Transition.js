import React from 'react';
import { useEffect } from 'react';
import { validate } from '../Auth';

function Transition() {
    useEffect(() => {
        validate()
    }, [])
    return (
        <div>
            I will take you to your privacy room.<br />
            Please wait.............
        </div>
    );
}

export default Transition;
