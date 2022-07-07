import { GET_PRODUCTS_DATA_FAILURE, GET_PRODUCTS_DATA_REQUEST, GET_PRODUCTS_DATA_SUCCESS } from "./actionTypes";



const init = {
    products: [],
    loading: true,
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
  
      default:
      return state;
  }
};

export default productReducer;