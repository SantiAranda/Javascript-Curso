import { createContext, useReducer } from "react";
import { InitialState, CartReducer } from "../reducers/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(CartReducer, InitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const removeToCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return {state, addToCart, removeToCart, clearCart}
}

export function CartProvider({ children }) {
  const {state, addToCart, removeToCart, clearCart} = useCartReducer()

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
