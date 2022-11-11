import React from 'react';
import './Cart.css'
import img from '../../image/istockphoto-1200677760-612x612.jpg'
const Cart = () => {
    return (
        <div className='cart'>
            <div className='profile'>
                <img src={img} alt="" />
                <div>
                    <h3>Tareque</h3>
                    <p>Melbourn Australia</p>
                </div>
            </div>
            <div className='body-measurements'>
                <div>
                    <h2>71 <small>kg</small></h2>
                    <p>Weight</p>
                </div>
                <div>
                    <h2>6.8</h2>
                    <p>height</p>
                </div>
                <div>
                    <h2>24</h2>
                    <p>Age</p>
                </div>
            </div>
            <div className='break'>
                <p>Add a Break</p>
                <div className='time'>
                    <button className='time-btn'>10s</button>
                    <button className='time-btn'>20s</button>
                    <button className='time-btn'>30s</button>
                    <button className='time-btn'>40s</button>
                    <button className='time-btn'>50s</button>
                </div>
            </div>
            <div className='exercise'>
                <p className='exercise-heading'>Exercise Details</p>
                <div className='exercise-time'>
                    <p>Exercise Time: </p>
                    <p>      Seconds</p>
                </div>
                <div className='exercise-time'>
                    <p>Break Time: </p>
                    <p>      Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Cart;