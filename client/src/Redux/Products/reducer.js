import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, GET_PRODUCTS_DATA_FAILURE, GET_PRODUCTS_DATA_REQUEST, GET_PRODUCTS_DATA_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./actionTypes";



const init = {
    products: [],
    loading: true,
    error: "",
    cart: [],
    currentProduct: {},
  };
  


  const productReducer = (state = init, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case GET_PRODUCTS_DATA_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case GET_PRODUCTS_DATA_SUCCESS: {
        return {
          ...state,
          products: payload,
          error: "",
          loading: false,
        };
      }
  
      case GET_PRODUCTS_DATA_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }







      case GET_SINGLE_PRODUCT_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case GET_SINGLE_PRODUCT_SUCCESS: {
        return {
          ...state,
          error: "",
          currentProduct: payload,
          loading: false,
        };
      }
  
      case GET_SINGLE_PRODUCT_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }













      case ADD_PRODUCT_CART_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case ADD_PRODUCT_CART_SUCCESS: {
        return {
          ...state,
          error: "",
          cart: [...state.cart, payload],
          loading: false,
        };
      }
  
      case ADD_PRODUCT_CART_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }












  
      default:
      return state;
  }
};

export default productReducer;