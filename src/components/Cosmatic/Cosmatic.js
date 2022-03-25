import React from 'react';
import { addTodb } from '../../utilities/fakedb';
import './Cosmatic.css'
const Cosmatic = (props) => {

    const { id, price, name } = props.cosmatic;

    const addToCart = (id) => {
        addTodb(id);
    }

    const addToCartWithPara = () => addToCart(id);

    return (
        <div className='product'>
            <h3>name:{name}</h3>
            <h6>price only: {price}</h6>
            <p>its has id: {id}</p>
            <button onClick={addToCartWithPara}>add to cart</button>
            <button onClick={() => addToCart(id)}>add to cart: shortcut</button>
        </div>
    );
};

export default Cosmatic;