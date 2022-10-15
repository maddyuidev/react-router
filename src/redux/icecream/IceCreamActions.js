import iceCream from "./IceCreamTypes";

export const buyIceCream = () => {
  return {
    type: iceCream.BUY_ICE_CREAM,
  };
};

export const makeIceCream = () => {
  return {
    type: iceCream.MAKE_ICE_CREAM,
  };
};
