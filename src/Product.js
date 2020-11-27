import React from 'react'
import './Product.css'
function Product({ id, title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p classNam="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>&#11088;</p>
                        ))
                    }
                </div>
            </div>
            <img className="" src={image} alt=""></img>
            <button>Add to Busket</button>
            
        </div>
    )
}

export default Product
