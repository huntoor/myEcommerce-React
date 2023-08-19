import './checkout.css';
import giveMe from './giveMe.jpg';

import { useState, useEffect, Fragment } from 'react';

function CheckoutPage() {
  // let isCreditCard = false;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleCheckout = (e) => {
    e.preventDefault();

    // Perform checkout logic here
    // You can send the form data to an API or perform any required processing

    // Reset form fields
    setName('');
    setEmail('');
    setAddress('');
    setPaymentMethod('');

    // Show success message or redirect to a confirmation page
  };



  return (
    <div className="checkout-form">
      <h2>Checkout</h2>
      <form onSubmit={handleCheckout}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type='text'
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required />
        </div>

        <div className="form-group">
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required >
            <option value="">Select a payment method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="kidney">kidney</option>
          </select>
        </div>
        {
          paymentMethod === "creditCard" &&
          <Fragment>
            <div className="form-group">
              <label htmlFor="card-number">Card Number:</label>
              <input type="text" id="card-number" required />
            </div>

            <div className="form-group">
              <label htmlFor="expiry">Expiry Date:</label>
              <input type="text" id="expiry" required />
            </div>

            <div className="form-group">
              <label htmlFor="cvc">CVC:</label>
              <input type="text" id="cvc" required />
            </div>
          </Fragment>
        }

        {
          paymentMethod === "paypal" &&
          <Fragment>
            <div className="form-group">
              <label htmlFor="paypalEmail">Email:</label>
              <input type="email" id="paypalEmail" required />
            </div>
          </Fragment>
        }

        {
          paymentMethod === "bitcoin" &&
          <Fragment>
            <div className="form-group">
              <label htmlFor="bitcoinAddress">Bitcoin Address:</label>
              <input type="text" id="bitcoinAddress" required />
            </div>

          </Fragment>
        }

        {
          paymentMethod === "kidney" &&
          <Fragment>
            <div className="form-group">
              <p style={{ textAlign: "center" }}>Give Kidney ( ੭•͈ω•͈)੭</p>
              <img src={giveMe} alt="Give meeee !!!" />
            </div>
          </Fragment>
        }

        <button type="submit" id='sub_btn'>Checkout</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
