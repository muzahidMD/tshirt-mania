import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h6>Special</h6>
            <p><small>{ring}</small></p>
        </div>
    );
};

export default Special;