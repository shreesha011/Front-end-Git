import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { doCreditPayment } from "../redux/store";
//import { Payments } from "./Pages/Payments";

export const Payments = () => {
  const [cardNum, setCardNum] = useState(null);
  const [expirationMonth, setExpirationMonth] = useState(null);
  const [expirationYear, setExpirationYear] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [Cardholdername, setName] = useState(null);
  const state = useSelector((state) => state);
  const amount = 340;
  const id = 1;
  const dispatch = useDispatch();

  function handleCreditPayment() {
    dispatch(
      doCreditPayment({
        paymentMode: "CREDIT",
        bill: {
          billId: state.bill.billId,
        },
      })
    );
  }

  const handleDebitPayment = () => {
    dispatch(
      doCreditPayment({
        paymentMode: "DEBIT",
        bill: {
          billId: state.bill.billId,
        },
      })
    );
    // console.log("Paying with debit..");
    // console.log(cardNum, expirationMonth, expirationYear, cvv, amount);
  };

  if (!state.bill) {
    return (
      <div>
        <h2>No bill found for payment</h2>
      </div>
    );
  }
  return (
    <div className="container">
      <h2 className="mb-3 p-3 text-center bg-dark text-light">Payments</h2>
      <div id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-2">
              <button
                className="btn btn-link "
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Credit Card
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            className="collapse show p-3"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div className="form-group">
              <label className="d-block">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">Expiration Date</label>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="expiratonMonth"
                    id="expiratonMonth"
                    onChange={(e) => setExpirationMonth(e.target.value)}
                    placeholder="Month"
                  />
                  {/* <select id="expiratonMonth" name="expiratonMonth" size="4" multiple  onChange={(e) => setExpirationMonth(e.target.value)}>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select> */}
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="expiratonYear"
                    id="expiratonYear"
                    onChange={(e) => setExpirationYear(e.target.value)}
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="d-block">CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">Card Holder Name</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={(e) => setCardNum(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">Amount</label>
              <input type="text" disabled value={state.bill.billAmount} />
            </div>
            <div className="btn btn-primary" onClick={handleCreditPayment}>
              Pay
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Debit Card
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse p-3"
            aria-labelledby="headingTwo"
            data-parent="#accordion"
          >
            <div className="form-group">
              <label className="d-block">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={(e) => setCardNum(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">Expiration Date</label>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="expiratonMonth"
                    id="expiratonMonth"
                    onChange={(e) => setExpirationMonth(e.target.value)}
                    placeholder="Month"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="expiratonYear"
                    id="expiratonYear"
                    onChange={(e) => setExpirationYear(e.target.value)}
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label className="d-block">CVV</label>
              <input
                type="text"
                name="cvv"
                id="cvv"
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">Card Holder Name</label>
              <input
                type="text"
                name="cardNumber"
                id="cardNumber"
                onChange={(e) => setCardNum(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="d-block">Amount</label>
              <input type="text" disabled value={amount} />
            </div>
            <div className="btn btn-success" onClick={handleDebitPayment}>
              Pay
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Wallet
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse"
            aria-labelledby="headingThree"
            data-parent="#accordion"
          >
            <div className="card-body">
              <input
                class="form-check-input mx-1"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label mx-4" for="flexRadioDefault1">
                Paytm
              </label>
              {/* <div className="btn btn-success " onClick={handleDebitPayment}>Pay</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
