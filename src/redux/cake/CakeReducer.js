import types from "./CakeTypes";

const initialState = {
  numberOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    case types.MAKE_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;
