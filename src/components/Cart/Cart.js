import React from 'react';
import './Cart.css'
import img from '../../image/istockphoto-1200677760-612x612.jpg'
const Cart = () => {
    return (
        <div>
            <div className='profile'>
                <img src={img} alt="" />
                <div>
                    <h3>Tareque</h3>
                    <p>Melbourn Australia</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;