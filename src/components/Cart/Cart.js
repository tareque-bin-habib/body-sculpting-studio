import React, { useEffect, useState } from 'react';
import './Cart.css'
import img from '../../image/istockphoto-1200677760-612x612.jpg'
const Cart = (props) => {
    const { cart } = props;
    const [ten, setTen] = useState(0)
    let time = 0;
    for (const data of cart) {
        time = time + data.time
    }
    const timeBtn10 = (dosh) => {
        setTen(dosh)
        localStorage.setItem('BreakTime', dosh)
    }
    useEffect(() => {
        const getValue = localStorage.getItem('BreakTime');
        setTen(getValue)
    }, [])
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
                    <button onClick={() => timeBtn10(10)} className='time-btn'>10s</button>
                    <button onClick={() => timeBtn10(20)} className='time-btn'>20s</button>
                    <button onClick={() => timeBtn10(30)} className='time-btn'>30s</button>
                    <button onClick={() => timeBtn10(40)} className='time-btn'>40s</button>
                    <button onClick={() => timeBtn10(50)} className='time-btn'>50s</button>
                </div>
            </div>
            <div className='exercise'>
                <p className='exercise-heading'>Exercise Details</p>
                <div className='exercise-time'>
                    <div className='exercise-time'>
                        <p>Exercise Time: {time}
                            Second
                        </p>
                    </div>

                </div>
                <div className='exercise-time'>
                    <p>Break Time: {ten} </p>
                    <p>      Seconds</p>
                </div>
            </div>
            <button className='completed-btn'>
                <p>Activity Completed</p>
            </button>
        </div >
    );
};

export default Cart;