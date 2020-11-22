import { ADD_TO_CART, FETCH_IMAGES, FETCH_PRODUCTS, REMOVE_FROM_CART, SELECT_PRODUCT_IN_CART, SHOW_PRODUCT_DETAILS, ADD_QUANTITY, SUB_QUANTITY, REMOVE_FROM_TOTAL } from './types';
import fakeStoreApi from  '../apis/fakeStoreApi';
import unsplashApi from '../apis/unsplash';

export const fetchProducts  = () =>  async dispatch => {
    const response = await fakeStoreApi.get('/products');

    dispatch({  type:  FETCH_PRODUCTS, payload: response.data});
};

export const fetchImages = () => async dispatch => {
    const response = await unsplashApi.get('/search/photos',{
        params: {   query: 'ham',
                    per_page: 20
        }
    });    
    dispatch({type: FETCH_IMAGES, payload: response.data.results})
};

export const showProductDetails = (product) => {
    return {
        type:  SHOW_PRODUCT_DETAILS,
        payload: product
    };
};

export const addQuantity = (product) =>{
    return {
        type: ADD_QUANTITY,
        payload: product
    };
};

export const removeFromCart =  (product) => (dispatch, getState)  => {
    const quantity =  getState().quantity[product.id];
    dispatch(removeFromCartSafe(product));
    dispatch(removeFromTotal(quantity));
};

const removeFromCartSafe  =  (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    };
};

const removeFromTotal = (quantity) =>  {
    return  {
        type: REMOVE_FROM_TOTAL,
        payload: quantity
    };
};

export const addToCart =  (product) => (dispatch, getState) => {
    if(!getState().cart.includes(product.id)) {
        dispatch(addToCartSafe(product));
    } else {
        dispatch(addQuantity(product));
    };

};

const addToCartSafe = (product) => {
    return {
        type: ADD_TO_CART,
        payload: {product}
    };
};

export const subQuantity = (product) => (dispatch, getState) => {
    if (getState().quantity[product.id] > 0) {
        dispatch(unSafeSubQuantity(product))
    }
    
};

const unSafeSubQuantity = (product) => {
    return {
        type: SUB_QUANTITY,
        payload: product
    };
}

export const selectProductInCart = (product) => {
    return {
        type: SELECT_PRODUCT_IN_CART,
        payload: product
    };
};
