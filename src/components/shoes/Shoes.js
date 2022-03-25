import React from 'react';
import { add, multiply } from '../../utilities/Calculate';

const Shoes = () => {
    const first = 11;
    const second = 18;
    const total = multiply(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h3>this is shoes components</h3>
            <h3>result:{total}</h3>
            <h4>sum:{sum}</h4>
        </div>
    );
};

export default Shoes;