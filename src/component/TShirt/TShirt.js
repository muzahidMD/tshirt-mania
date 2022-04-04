import React from 'react';
import './TShirt.css'

const TShirt = ({ tshirt, handleAddToCart }) => {


    const { name, price, picture } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <div >
                <h4 className='tshirtName'>{name}</h4>
                <p className='tshirtPrice'>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(tshirt)}>Add to Cart</button>
        </div>
    );
};

export default TShirt;