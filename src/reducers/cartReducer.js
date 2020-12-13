import _ from 'lodash'
import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_FROM_TOTAL,
  SUB_QUANTITY,
} from '../actions/types'

const initialState = []
const quantityInitialState = {}
const totalItems = 0

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload.product.id]
    case REMOVE_FROM_CART:
      return state.filter((element) => element !== action.payload.id)
    default:
      return state
  }
}

export const quantityReducer = (state = quantityInitialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, [action.payload.product.id]: 1 }
    case REMOVE_FROM_CART:
      return _.omit(state, action.payload.id)
    case ADD_QUANTITY:
      return { ...state, [action.payload.id]: ++state[action.payload.id] }
    case SUB_QUANTITY:
      return { ...state, [action.payload.id]: --state[action.payload.id] }
    default:
      return state
  }
}

export const totalItemsReducer = (state = totalItems, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return ++state
    case REMOVE_FROM_TOTAL:
      return state - action.payload
    case ADD_QUANTITY:
      return ++state
    case SUB_QUANTITY:
      return --state
    default:
      return state
  }
}
