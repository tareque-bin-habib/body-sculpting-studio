import React from 'react';
import './Products.css'
const Products = (props) => {
    const { addToList } = props
    // console.log(props)
    const { img, name, details, age, time } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='card-details'>
                <h3>{name}</h3>
                <p>{details}</p>
                <p>For Age : {age}</p>
                <p>Time required: {time} s</p>
            </div>
            <button onClick={() => addToList(props.product)} className='add-to-list-btn'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Products;