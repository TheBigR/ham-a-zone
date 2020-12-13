import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import selectedProductReducer from './selectedProductReducer'
import { cartReducer, quantityReducer, totalItemsReducer } from './cartReducer'
import imageReducer from './imageReducer'

export default combineReducers({
  products: productsReducer,
  images: imageReducer,
  selectedProd: selectedProductReducer,
  cart: cartReducer,
  quantity: quantityReducer,
  totalItems: totalItemsReducer,
})
