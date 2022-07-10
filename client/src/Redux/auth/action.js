import axios from "axios";

export const SIGNIN_REQUEST = "SIGNIN_REQUEST";

export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";

export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

const signInRequest = () => {
  return {
    type: SIGNIN_REQUEST,
  };
};

const signInSuccess = (payload) => {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
};

const signInFailure = (payload) => {
  return {
    type: SIGNIN_FAILURE,
    payload,
  };
};

const signIn = (payload) => (dispatch) => {
  dispatch(signInRequest());

  axios
    .post("/api/login", payload, { baseURL: "https://reqres.in" })
    .then((res) => dispatch(signInSuccess(res.data)))
    .catch((err) => dispatch(signInFailure(err.data)));
};

export { signIn };
