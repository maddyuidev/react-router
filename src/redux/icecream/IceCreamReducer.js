import iceCreamTypes from "./IceCreamTypes";

const initialState = {
  numberOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case iceCreamTypes.BUY_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    case iceCreamTypes.MAKE_ICE_CREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
