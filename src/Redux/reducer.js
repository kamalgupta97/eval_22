import {
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  GET_ASC_ORDER,
  GET_DESC_ORDER,
  GET_SINGLE_PRODUCT,
} from "./actionTypes";

const initState = {
  products: [],
  isLoading: false,
  isError: false,
  singleProduct: {},
};

export const Reducer = (state = initState, { type, payload }) => {
  // add the switch statement for different actions
  switch (type) {
    case PRODUCT_REQUEST:
      return { ...state, isLoading: true };
    case PRODUCT_SUCCESS:
      return { ...state, isLoading: false, products: [...payload] };
    case PRODUCT_FAILURE:
      return { ...state, isLoading: false, isError: true };
    case GET_ASC_ORDER: {
      let sortedProducts = state.products.sort((a, b) => a.price - b.price);
      return { ...state, isLoading: false, products: [...sortedProducts] };
    }
    case GET_DESC_ORDER: {
      let sortedProducts = state.products.sort((a, b) => b.price - a.price);
      console.log(sortedProducts, " [...sortedProducts]");
      return { ...state, isLoading: false, products: [...sortedProducts] };
    }
    case GET_SINGLE_PRODUCT: {
      return { ...state, singleProduct: payload, isLoading: false };
    }
    default:
      return {
        ...state,
      };
  }
};
