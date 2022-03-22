import axios, { Axios } from "axios";
import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  GET_ASC_ORDER,
  GET_DESC_ORDER,
} from "./actionTypes";
// action for get products request
const getProductsReq = (payload) => {
  return { type: PRODUCT_REQUEST, payload };
};

// action for get products success

const getProductsSuccess = (payload) => {
  return { type: PRODUCT_SUCCESS, payload };
};

// action for get products failure

const getProductsFailure = (payload) => {
  return { type: PRODUCT_FAILURE, payload };
};

const getAscendingOrder = () => {
  return { type: GET_ASC_ORDER };
};
const getdescendingOrder = () => {
  return { type: GET_DESC_ORDER };
};
// thunk call to fetch products  list
export const getproductsData = () => (dispatch) => {
  dispatch(getProductsReq());
  return axios
    .get("https://movie-fake-server.herokuapp.com/products")
    .then((res) => res.data)
    .then((res) => dispatch(getProductsSuccess(res)))
    .catch((e) => dispatch(getProductsFailure(e)));
};

// action object for sort  feature
// https://movie-fake-server.herokuapp.com/products?_sort=price&_order=asc
// export const sortProducts = (payload) => (dispatch) => {
//   dispatch(getProductsReq());
//   return axios
//     .get(
//       `https://movie-fake-server.herokuapp.com/products?_sort=price&_order=${payload}`
//     )
//     .then((res) => res.data)
//     .then((res) => dispatch(getProductsSuccess(res)))
//     .catch((e) => dispatch(getProductsFailure(e)));
// };

export const sortProducts = (payload) => (dispatch) => {
  dispatch(getProductsReq());
  if (payload == "asc") {
    dispatch(getAscendingOrder());
  } else {
    dispatch(getdescendingOrder());
  }
};
