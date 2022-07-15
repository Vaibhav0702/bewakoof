import axios from "axios";

import {
  ADD_ORDER_FAILURE,
  ADD_ORDER_REQUEST,
  ADD_ORDER_SUCCESS,
  ADD_PRODUCT_CART_FAILURE,
  ADD_PRODUCT_CART_REQUEST,
  ADD_PRODUCT_CART_SUCCESS,
  ADD_PRODUCT_WISH_FAILURE,
  ADD_PRODUCT_WISH_REQUEST,
  ADD_PRODUCT_WISH_SUCCESS,
  EMPTY_CART_FAILURE,
  EMPTY_CART_REQUEST,
  EMPTY_CART_SUCCESS,
  FETCH_CART_FAILURE,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH_WISH_FAILURE,
  FETCH_WISH_REQUEST,
  FETCH_WISH_SUCCESS,
  GET_PRODUCTS_DATA_FAILURE,
  GET_PRODUCTS_DATA_REQUEST,
  GET_PRODUCTS_DATA_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_CART_FAILURE,
  REMOVE_PRODUCT_CART_REQUEST,
  REMOVE_PRODUCT_CART_SUCCESS,
  REMOVE_PRODUCT_WISH_FAILURE,
  REMOVE_PRODUCT_WISH_REQUEST,
  REMOVE_PRODUCT_WISH_SUCCESS,
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

const getSingleProduct = (id, navigate) => (dispatch) => {
  dispatch(getSingleProductRequest());

  axios
    .get(`/products/${id}`)
    .then((res) => dispatch(getSingleProductSuccess(res.data)))
    .catch((err) => {
      dispatch(getSingleProductFailure(err.data));
      if (err.message === "Request failed with status code 404") {
        navigate("/error");
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

const addProductCart = (product, navigate) => (dispatch) => {
  dispatch(addProductCartRequest());

  axios
    .post("/cart", product)
    .then((res) => {
      dispatch(addProductCartSuccess(res.data));

      alert("Product is Successfully Added to cart 😃");

      navigate("/cart");
    })
    .catch((err) => {
      dispatch(addProductCartFailure(err.data));
     
      alert("Added to cart UnSuccessful 😩");
    });
};

// ----------------Add to Wishlist

const addProductWishRequest = (payload) => {
  return {
    type: ADD_PRODUCT_WISH_REQUEST,
    payload,
  };
};

const addProductWishSuccess = (payload) => {
  return {
    type: ADD_PRODUCT_WISH_SUCCESS,
    payload,
  };
};

const addProductWishFailure = (payload) => {
  return {
    type: ADD_PRODUCT_WISH_FAILURE,
    payload,
  };
};

const addProductWish = (product, navigate) => (dispatch) => {
  dispatch(addProductWishRequest());

  axios
    .post("/wishlist", product)
    .then((res) => {
      dispatch(addProductWishSuccess(res.data));

      alert("Product is Successfully Added to Wishlist 😃");

      navigate("/wishlist");
    })
    .catch((err) => {
      dispatch(addProductWishFailure(err.data));
      alert("Added to Wishlist UnSuccessful 😩");
    });
};

// ------------------------get Cart data --------------------

const fetchCartRequest = (payload) => {
  return {
    type: FETCH_CART_REQUEST,
    payload,
  };
};

const fetchCartSuccess = (payload) => {
  return {
    type: FETCH_CART_SUCCESS,
    payload,
  };
};

const fetchCartFailure = (payload) => {
  return {
    type: FETCH_CART_FAILURE,
    payload,
  };
};

const fetchCart = (payload) => (dispatch) => {
  dispatch(fetchCartRequest());

  axios
    .get("/cart")
    .then((res) => dispatch(fetchCartSuccess(res.data)))
    .catch((err) => dispatch(fetchCartFailure(err.data)));
};

// ------------------------get Wish data --------------------

const fetchWishRequest = (payload) => {
  return {
    type: FETCH_WISH_REQUEST,
    payload,
  };
};

const fetchWishSuccess = (payload) => {
  return {
    type: FETCH_WISH_SUCCESS,
    payload,
  };
};

const fetchWishFailure = (payload) => {
  return {
    type: FETCH_WISH_FAILURE,
    payload,
  };
};

const fetchWish = (payload) => (dispatch) => {
  dispatch(fetchWishRequest());

  axios
    .get("/wishlist")
    .then((res) => dispatch(fetchWishSuccess(res.data)))
    .catch((err) => dispatch(fetchWishFailure(err.data)));
};





// ----------------------remove product from cart---------

const removeProductCartRequest = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_REQUEST,
    payload,
  };
};

const removeProductCartSuccess = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_SUCCESS,
    payload,
  };
};

const removeProductCartFailure = (payload) => {
  return {
    type: REMOVE_PRODUCT_CART_FAILURE,
    payload,
  };
};

const deleteProductCart = (id) => (dispatch) => {
  dispatch(removeProductCartRequest());

  axios
    .delete(`/cart/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(removeProductCartSuccess(res.data));

      alert("Product Successfully removed from Cart 😃 ")
    })
    .then(() => dispatch(fetchCart()))
    .catch((err) => {dispatch(removeProductCartFailure(err.data))
    
      alert("Removed Product UnSuccessful 😩");
    
    
    });
};





// ----------------------remove product from Wishlist---------

const removeProductWishRequest = (payload) => {
  return {
    type: REMOVE_PRODUCT_WISH_REQUEST,
    payload,
  };
};

const removeProductWishSuccess = (payload) => {
  return {
    type: REMOVE_PRODUCT_WISH_SUCCESS,
    payload,
  };
};

const removeProductWishFailure = (payload) => {
  return {
    type: REMOVE_PRODUCT_WISH_FAILURE,
    payload,
  };
};

const deleteProductWish = (id) => (dispatch) => {
  dispatch(removeProductWishRequest());

  axios
    .delete(`/wishlist/${id}`)
    .then((res) => {
      console.log(res.data);
      dispatch(removeProductWishSuccess(res.data));
      alert("Product Successfully removed from Wishlist 😃")
    })
    .then(() => dispatch(fetchWish()))
    .catch((err) => {

      dispatch(removeProductWishFailure(err.data))
      
      alert("Removed Product UnSuccessful 😩");

    });
};




// --------------- add orders


const addOrderRequest = (payload) => {
  return {
    type: ADD_ORDER_REQUEST,
    payload,
  };
};

const addOrderSuccess = (payload) => {
  return {
    type: ADD_ORDER_SUCCESS,
    payload,
  };
};

const addOrderFailure = (payload) => {
  return {
    type: ADD_ORDER_FAILURE,
    payload,
  };
};

const addOrder = (payload) => (dispatch) => {
  dispatch(addOrderRequest());

  const orderPayload = [];

  for (let product of payload) {
    product && orderPayload.push(axios.post("/orders", product)); // we cant directly add all orders thats whats why we add one by one
  }

  Promise.all(orderPayload)
    .then((res) => dispatch(addOrderSuccess()))
    .then(() => dispatch(emptyCart(payload))) // it makes cart empty after add order
    .catch((err) => dispatch(addOrderFailure())); // resolve all promises of orderPayload
};



// ----------------------after order make  empty cart


const emptyCartRequest = (payload) => {
  return {
    type: EMPTY_CART_REQUEST,
    payload,
  };
};

const emptyCartSuccess = (payload) => {
  return {
    type: EMPTY_CART_SUCCESS,
    payload,
  };
};

const emptyCartFailure = (payload) => {
  return {
    type: EMPTY_CART_FAILURE,
    payload,
  };
};

const emptyCart = (payload) => (dispatch) => {
  dispatch(emptyCartRequest());

  const deleteOrder = [];

  for (let obj of payload) {
    let temp = dispatch(deleteProductCart(obj.id)); // delete product

    deleteOrder.push(temp);
  }

  Promise.all(deleteOrder)
    .then((res) => dispatch(emptyCartSuccess()))
    .catch((err) => dispatch(emptyCartFailure()));
};




// ---------------------fetch orders

const fetchOrderRequest = (payload) => {
  return {
    type: FETCH_ORDERS_REQUEST,
    payload,
  };
};

const fetchOrderSuccess = (payload) => {
  return {
    type: FETCH_ORDERS_SUCCESS,
    payload,
  };
};

const fetchOrderFailure = (payload) => {
  return {
    type: FETCH_ORDERS_FAILURE,
    payload,
  };
};

const fetchOrder = (payload) => (dispatch) => {
  dispatch(fetchOrderRequest());

  axios
    .get("/orders")
    .then((res) => dispatch(fetchOrderSuccess(res.data)))
    .catch((err) => dispatch(fetchOrderFailure(err.data)));
};







export {
  getProductsData,
  addProductCart,
  getSingleProduct,
  addProductWish,
  fetchCart,
  fetchWish,
  deleteProductCart,
  deleteProductWish,
  addOrder,
  emptyCart,
  fetchOrder
};
