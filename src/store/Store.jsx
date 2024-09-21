/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import productsReducer from "./productsReducer";
import cartReducer, {
  AddCartItem,
  DecreaseCartItemQuantity,
  IncreaseCartItemQuantity,
} from "./CartReducer";
import wishListReducer, {
  AddWishListItem,
  RemoveWishListItem,
} from "./WishlistReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__?.()
);

// console.log(store)

// store.dispatch(AddCartItem(1))
// store.dispatch(AddCartItem(12))

// store.dispatch(IncreaseCartItemQuantity(12))

// store.dispatch(DecreaseCartItemQuantity(12))
// store.dispatch(DecreaseCartItemQuantity(12))

// store.dispatch(AddWishListItem(18))
// store.dispatch(AddWishListItem(11))

// store.dispatch(RemoveWishListItem(11))
// store.dispatch(RemoveWishListItem(18))
