import React from 'react';
import { Link } from 'react-router-dom';

const CartView = () => {
  return (
    <div className="cart-view">
      <h1>Shopping Cart</h1>
      <table className="cart-view-table">
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><button className="cart-view-remove">×</button></td>
            <td>
              <div className="cart-view-product-info">
                <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Plain White Shirt" />
                <span>Plain White Shirt</span>
              </div>
            </td>
            <td>₹550.00</td>
            <td><input type="number" defaultValue="1" /></td>
            <td>₹550.00</td>
          </tr>
          <tr>
            <td><button className="cart-view-remove">×</button></td>
            <td>
              <div className="cart-view-product-info">
                <img src="https://cdn.pixabay.com/photo/2016/03/25/09/04/t-shirt-1278404_1280.jpg" alt="Plain White Shirt" />
                <span>Plain White Shirt</span>
              </div>
            </td>
            <td>₹550.00</td>
            <td><input type="number" defaultValue="1" /></td>
            <td>₹550.00</td>
          </tr>
        </tbody>
      </table>

      <div className="cart-view-totals">
        <h2>Cart Totals</h2>
        <div className="cart-view-totals-item">
          <span>Subtotal</span>
          <span>₹550.00</span>
        </div>
        <div className="cart-view-totals-item">
          <span>Shipping</span>
          <span>Free!!!</span>
        </div>
        <div className="cart-view-totals-item">
          <span>Total</span>
          <span>₹550.00</span>
        </div>
        <Link to="checkout"><button className="cart-view-checkout">PROCEED TO CHECKOUT</button></Link>
      </div>
    </div>
  );
};

export default CartView;
