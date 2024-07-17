import React from 'react';

const ProductCardView = () => {
  return (
    <div className="product-card-view">
      <div className="product-card-view-image">
        <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Plain White Shirt" />
      </div>
      <div className="product-card-view-details">
        <h2>Plain White Shirt</h2>
        <div className="product-card-view-rating">
          <span>★★★★★</span>
          <span>(15)</span>
        </div>
        <div className="product-card-view-price">
          <span className="product-card-view-original-price">₹950.00</span>
          <span className="product-card-view-discounted-price">₹550.00</span>
        </div>
        <p className="product-card-view-description">
          A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.
        </p>
        <div className="product-card-view-category">
          <strong>Category:</strong> Women, Polo, Casual
        </div>
        <div className="product-card-view-tags">
          <strong>Tags:</strong> Modern, Design, Cotton
        </div>
        <div className="product-card-view-size">
          <label htmlFor="size">Select Size</label>
          <select id="size">
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </div>
        <button className="product-card-view-add-to-cart">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCardView;
