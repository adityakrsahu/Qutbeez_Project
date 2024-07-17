import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/'); 
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <ProductCardInner
                    key={index}
                    name={product.title}
                    price={product.price}
                    description={product.description}
                    image={product.image}
                />
            ))}
        </div>
    );
};

const ProductCardInner = ({ name, price, description, image }) => {
    return (
        
        <div className="product-card">
            <Link to="" className='product-card-main'>
            <img src={image} alt={name} className="product-image" />
            <h2 className="product-name">{name}</h2>
            <p className="product-price">${price.toFixed(2)}</p>
            </Link>
        </div>
        
    );
};

ProductCardInner.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};

export default ProductCard;
