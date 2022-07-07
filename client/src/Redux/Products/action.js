import axios from "axios";

import {
  GET_PRODUCTS_DATA_FAILURE,
  GET_PRODUCTS_DATA_REQUEST,
  GET_PRODUCTS_DATA_SUCCESS,
} from "./actionTypes";

//-------------getProductsData--------------

const getProductsDataRequest = (payload) => {
  return {
    type: GET_PRODUCTS_DATA_REQUEST,
    payload,
  };
};

const getProductsDataSuccess = (payload) => {
  return {
    type: GET_PRODUCTS_DATA_SUCCESS,
    payload,
  };
};

const getProductsDataFailure = (payload) => {
  return {
    type: GET_PRODUCTS_DATA_FAILURE,
    payload,
  };
};


const getProductsData = (payload) => {
  return (dispatch) => {
    dispatch(getProductsDataRequest());

    axios
      .get("/products", {
        params: {
          ...payload, 
        },
      })
      .then((res) => {
        dispatch(getProductsDataSuccess(res.data));
        // console.log(res.data)
      })
      .catch((err) => dispatch(getProductsDataFailure(err.data)));
  };
};

export { getProductsData };
