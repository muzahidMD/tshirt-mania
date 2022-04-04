import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    //conditional rendering options
    // 01. Element variable
    // 02. Ternary operator => condition ? true :
    // && operator (shorthand)
    // || 

    let command;
    if (cart.length === 0) {
        command = <div>
            <h5>Please Add at least one Item!!!</h5>
        </div>
    }
    else if (cart.length === 1) {
        command = <h5>Please add more....</h5>
    }
    else {
        command = <h5><small>Thanks for adding item</small></h5>
    }

    return (
        <div>
            <h2>Selected Item:{cart.length}</h2>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'> YAY! You are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin joner gift</p>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
            {cart.length === 4 && <button className='orange'>Review order</button>}
        </div>
    );
};

export default Cart;