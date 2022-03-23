import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([])
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const addToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-containers">
                {
                    products.map(product => <Product addToCart={() => addToCart(product)} product={product} key={product.id}></Product>)
                }
            </div>

            <div className="cart-containers">
                <h3>order summery</h3>
                <h3>selected item: {cart.length} </h3>
                {
                    cart.map(theCart => <TheCart key={theCart.id} name={theCart.name} price={theCart.price}></TheCart>)
                }
            </div>
        </div>
    );
};


const TheCart = (props) => {
    return (
        <div>
            <h4>product name: {props.name}</h4>

            <h4>product price: {props.price}</h4>
        </div>
    )
}

export default Shop;