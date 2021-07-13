import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  readingList: [],
};

//Action type
const READING_CREATE_ACTION_TYPE = "READING_CREATE_ACTION_TYPE";
const GET_BILL_BY_Phone_ACTION = "GET_BILL_BY_Phone_ACTION_TYPE";
// const GET_BILL_BY_ConsumerNumber_ACTION =
//   "GET_BILL_BY_ConsumerNumber_ACTION_TYPE";
// const GET_BILL_BY_Email_ACTION = "GET_BILL_BY_Email_ACTION_TYPE";

export const createReadingAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/selfreading`;
    console.log("creat reading entry : " + payload);
    await axios.post(url, payload);
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

// export const getBillbyconsumer = (payload) => {
//   return async (dispatch) => {
//     console.log(`filter : ${payload}`);
//     let url;
//     if (payload.filterType === "filterByConsumerNumber") {
//       url = `http://localhost:8080/viewbillconsumernumber/${payload.filter.consumerNumber}`;
//     }
//     const response = await axios.get(url);
//     dispatch({
//       type: GET_BILL_BY_ConsumerNumber_ACTION,
//       payload: response.data,
//     });
//   };
// };

// export const getBillbyemail = (payload) => {
//   return async (dispatch) => {
//     console.log(`filter : ${payload}`);
//     let url;
//     if (payload.filterType === "filterByEmail") {
//       url = `http://localhost:8080/viewBillByEmail/${payload.filter.email}`;
//     }
//     const response = await axios.get(url);
//     dispatch({ type: GET_BILL_BY_Email_ACTION, payload: response.data });
//   };
// };

function BillReducer(state = initState, action) {
  switch (action.type) {
    case GET_BILL_BY_Phone_ACTION:
      return { ...state, bill: action.payload };
    default:
      return state;
  }
}

const store = createStore(BillReducer, applyMiddleware(thunk));

export { store };
