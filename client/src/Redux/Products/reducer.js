import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS, ADD_PRODUCT_WISH_FAILURE, ADD_PRODUCT_WISH_REQUEST, ADD_PRODUCT_WISH_SUCCESS, FETCH_CART_FAILURE, FETCH_CART_REQUEST, FETCH_CART_SUCCESS, FETCH_ORDERS_FAILURE, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS, FETCH_WISH_FAILURE, FETCH_WISH_REQUEST, FETCH_WISH_SUCCESS, GET_PRODUCTS_DATA_FAILURE, GET_PRODUCTS_DATA_REQUEST, GET_PRODUCTS_DATA_SUCCESS, GET_SINGLE_PRODUCT_FAILURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS, REMOVE_PRODUCT_CART_FAILURE, REMOVE_PRODUCT_CART_REQUEST, REMOVE_PRODUCT_ORDER_FAILURE, REMOVE_PRODUCT_ORDER_REQUEST, REMOVE_PRODUCT_WISH_FAILURE, REMOVE_PRODUCT_WISH_REQUEST } from "./actionTypes";



const init = {
    products: [],
    loading: true,
    error: "",
    cart: [],
    currentProduct: {},
    wishlist:[],
    orders: [],
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



 

      
      case ADD_PRODUCT_WISH_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case ADD_PRODUCT_WISH_SUCCESS: {
        return {
          ...state,
          error: "",
          wishlist: [...state.wishlist, payload],
          loading: false,
        };
      }
  
      case ADD_PRODUCT_WISH_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }







      case FETCH_CART_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case FETCH_CART_SUCCESS: {
        return {
          ...state,
          error: "",
          cart: [...payload],
          loading: false,
        };
      }
  
      case FETCH_CART_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }
  





      case FETCH_WISH_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case FETCH_WISH_SUCCESS: {
        return {
          ...state,
          error: "",
          wishlist: [...payload],
          loading: false,
        };
      }
  
      case FETCH_WISH_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }
  





      case REMOVE_PRODUCT_CART_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case REMOVE_PRODUCT_CART_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }
  




      case REMOVE_PRODUCT_WISH_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case REMOVE_PRODUCT_WISH_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }




      case FETCH_ORDERS_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case FETCH_ORDERS_SUCCESS: {
        return {
          ...state,
          error: "",
          orders: [...payload],
          loading: false,
        };
      }
  
      case FETCH_ORDERS_FAILURE: {
        return {
          ...state,
          error: payload,
          loading: false,
        };
      }







      case REMOVE_PRODUCT_ORDER_REQUEST: {
        return {
          ...state,
          error: "",
          loading: true,
        };
      }
  
      case REMOVE_PRODUCT_ORDER_FAILURE: {
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