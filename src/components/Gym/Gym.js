import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Gym.css'
const Gym = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToList = (time) => {
        const newTime = [...cart, time]
        setCart(newTime)
        // console.log('time', time)
    }
    return (
        <div>
            <h2 className='heading'>Body Sculpting Studio</h2>
            <h3>Select Todays Exercise</h3>
            <div className='gym-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Products product={product} key={product.id} addToList={addToList}></Products>)
                    }
                </div>
                <div className='cart'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>

    );
};

export default Gym;