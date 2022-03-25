import React from 'react';
import { add } from '../../utilities/Calculate';
import Cosmatic from '../Cosmatic/Cosmatic';
import './Cosmatics.css'
const Cosmatics = () => {
    const cosmatics = [
        { id: 1, name: 'alta', price: 100 },
        { id: 2, name: 'blta', price: 700 },
        { id: 3, name: 'clta', price: 600 },
        { id: 4, name: 'dlta', price: 500 },
        { id: 5, name: 'elta', price: 400 },
    ]
    return (
        <div className='produc'>
            <h1>wellcome to my cosmatics store.</h1>
            {
                cosmatics.map(cosmatic => <Cosmatic key={cosmatic.id} cosmatic={cosmatic}></Cosmatic>)
            }
        </div>
    );
};

export default Cosmatics;