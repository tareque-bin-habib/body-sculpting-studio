import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Gym.css'
const Gym = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Body Sculpting Studio</h2>
            <h3>Select Todays Exercise</h3>
            <div className='gym-container'>
                <div className='product-container'>
                    {
                        products.map(product => <Products product={product} key={product.id}></Products>)
                    }
                </div>
                <div className='cart'>
                    <Cart></Cart>
                </div>
            </div>
        </div>

    );
};

export default Gym;