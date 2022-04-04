import React, { useState } from 'react';
import useTShirt from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home .css'

const Home = () => {
    const [tshirts, setTShirt] = useTShirt();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (selectedItem) => {
        const exists = cart.find(tshirt => tshirt._id === selectedItem._id);
        if (!exists) {
            const newCart = [...cart, selectedItem]
            setCart(newCart);
        }
        else {
            alert('Item already added')
        }
    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id);
        setCart(rest);
    }

    return (
        <div className="home-container">
            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;