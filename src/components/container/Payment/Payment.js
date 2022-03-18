import React from 'react'
import './Payment.css'
const Payment = () => {
  return (
    <section className="paymentInformation">
  <form id="paymentForm">
    <fieldset>
      <legend>Payment Information:</legend>
      <div>
        <input
          id="cardNo"
          type="number"
          autoFocus=""
          placeholder="Card Number"
          required=""
        />
        <span id="errorMsgPayment" />
      </div>
      <div>
        <input id="expiry" required="" type="date" autoFocus="" />
        <span id="errorMsgPayment" />
      </div>
      <div>
        <input
          id="cvv"
          required=""
          type="number"
          autoFocus=""
          placeholder="CVV"
        />
        <span id="errorMsgPayment" />
      </div>
    </fieldset>
  </form>
</section>

  )
}

export default Payment