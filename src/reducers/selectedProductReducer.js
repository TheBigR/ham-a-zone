import { SHOW_PRODUCT_DETAILS, UPDATE_QUANTITY } from '../actions/types'

const INITIAL_STATE = {
  selectedProduct: null,
  selectedProductQuantity: 1,
}

const selectedProductReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_PRODUCT_DETAILS:
      return { ...state, selectedProduct: action.payload }
    case UPDATE_QUANTITY:
      return { ...state, selectedProductQuantity: action.payload }
    default:
      return state
  }
}

export default selectedProductReducer
