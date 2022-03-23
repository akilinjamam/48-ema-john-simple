import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>product name: {props.name}</h4>

            <h4>product price: {props.price}</h4>
        </div>
    );
};

export default Cart;