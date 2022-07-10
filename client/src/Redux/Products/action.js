import axios from "axios";

import {
  ADD_PRODUCT_CART_FAILURE,
  ADD_PRODUCT_CART_REQUEST,
  ADD_PRODUCT_CART_SUCCESS,
  GET_PRODUCTS_DATA_FAILURE,
  GET_PRODUCTS_DATA_REQUEST,
  GET_PRODUCTS_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
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



// ----------------------get single product details

const getSingleProductRequest = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_REQUEST,
    payload,
  };
};

const getSingleProductSuccess = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_SUCCESS,
    payload,
  };
};

const getSingleProductFailure = (payload) => {
  return {
    type: GET_SINGLE_PRODUCT_FAILURE,
    payload,
  };
};

const getSingleProduct = (id , navigate) => (dispatch) => {
  
  dispatch(getSingleProductRequest());

  axios
    .get(`/products/${id}`)
    .then((res) => dispatch(getSingleProductSuccess(res.data)))
    .catch((err) => {
      dispatch(getSingleProductFailure(err.data));
      if(err.message === "Request failed with status code 404")
      {
          
               navigate("/error")
          
      }
    });
};



// ----------------Add to cart

const addProductCartRequest = (payload) => {
  return {
    type: ADD_PRODUCT_CART_REQUEST,
    payload,
  };
};

const addProductCartSuccess = (payload) => {
  return {
    type: ADD_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const addProductCartFailure = (payload) => {
  return {
    type: ADD_PRODUCT_CART_FAILURE,
    payload,
  };
};

const addProductCart = (product) => (dispatch) => {
  dispatch(addProductCartRequest());

  axios
    .post("/cart", product)
    .then((res) => dispatch(addProductCartSuccess(res.data)))
    .catch((err) => dispatch(addProductCartFailure(err.data)));
};








export { getProductsData ,addProductCart  ,getSingleProduct   };
