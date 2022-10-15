import types from "./CakeTypes";

export const buyCake = () => {
  return {
    type: types.BUY_CAKE,
  };
};

export const makeCake = () => {
  return {
    type: types.MAKE_CAKE,
  };
};
