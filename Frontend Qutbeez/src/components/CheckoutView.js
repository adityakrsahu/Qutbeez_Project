import React from 'react';

const CheckoutView = () => {
  return (
    <div className="checkout-view">
      <h1>Billing details</h1>
      <form className="billing-details">
        <div className="form-group">
          <label htmlFor="fullName">Full Name*</label>
          <input type="text" id="fullName" required />
        </div>
        <div className="form-group">
          <label htmlFor="streetAddress">Street address*</label>
          <input type="text" id="streetAddress" required placeholder="House number and street name" />
        </div>
        <div className="form-group">
          <label htmlFor="city">Town / City*</label>
          <input type="text" id="city" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone*</label>
          <input type="tel" id="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address*</label>
          <input type="email" id="email" required />
        </div>
      </form>

      <h1>Your order</h1>
      <table className="order-summary">
        <thead>
          <tr>
            <th>Product</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plain White Shirt</td>
            <td>₹550.00</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>₹550.00</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>₹550.00</td>
          </tr>
        </tbody>
      </table>

      <div className="order-notes">
        <p>Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements.</p>
      </div>

      <button className="place-order-button">PLACE ORDER</button>
    </div>
  );
};

export default CheckoutView;
