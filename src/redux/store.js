import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  readingList: [],
  uref: {},
};

//Action type
const READING_CREATE_ACTION_TYPE = "READING_CREATE_ACTION_TYPE";
const GET_BILL_BY_Phone_ACTION = "GET_BILL_BY_Phone_ACTION_TYPE";

const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const PAYMENT_SUCCESSFUL_ACTION_TYPE = "PAYMENT_SUCCESSFUL_ACTION_TYPE";
const PAYMENT_FAILURE_ACTION_TYPE = "PAYMENT_FAILURE_ACTION_TYPE";
export const PAYMENT_STATE_CLEAR_ACTION_TYPE =
  "PAYMENT_STATE_CLEAR_ACTION_TYPE";

// const GET_BILL_BY_ConsumerNumber_ACTION =
//   "GET_BILL_BY_ConsumerNumber_ACTION_TYPE";
// const GET_BILL_BY_Email_ACTION = "GET_BILL_BY_Email_ACTION_TYPE";

export const createReadingAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/selfreading`;
    console.log("creat reading entry : " + payload);
    await axios.post(url, payload);
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export const getBill = (payload) => {
  return async (dispatch) => {
    console.log(`filter : ${payload}`);
    let url;
    if (payload.filterType === "filterByPhone") {
      url = `http://localhost:8080/viewBillMobileNumber/${payload.filter.phoneNumber}`;
    } else if (payload.filterType === "filterByEmail") {
      url = `http://localhost:8080/viewBillByEmail/${payload.filter.email}`;
    } else if (payload.filterType === "filterByConsumerNumber") {
      url = `http://localhost:8080/viewbillconsumernumber/${payload.filter.consumerNumber}`;
    }
    const response = await axios.get(url);
    dispatch({ type: GET_BILL_BY_Phone_ACTION, payload: response.data });
  };
};

export const doCreditPayment = (payload) => {
  return async (dispatch) => {
    console.log("Paying with credit..");
    try {
      const response = await axios.post(
        "http://localhost:8080/payment",
        payload
      );
      dispatch({
        type: PAYMENT_SUCCESSFUL_ACTION_TYPE,
        payload: { status: "successful" },
      });
    } catch (err) {
      console.log(`Error occured ${err}`);
      dispatch({
        type: PAYMENT_FAILURE_ACTION_TYPE,
        payload: { status: "failed" },
      });
    }
  };
};

function BillReducer(state = initState, action) {
  switch (action.type) {
    case GET_BILL_BY_Phone_ACTION:
      return { ...state, bill: action.payload };
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };
    case PAYMENT_SUCCESSFUL_ACTION_TYPE:
      return { ...state, payment: action.payload };
    case PAYMENT_FAILURE_ACTION_TYPE:
      return { ...state, payment: action.payload };
    case PAYMENT_STATE_CLEAR_ACTION_TYPE:
      return { ...state, payment: null };
    default:
      return state;
  }
}

const store = createStore(BillReducer, applyMiddleware(thunk));

export { store };
