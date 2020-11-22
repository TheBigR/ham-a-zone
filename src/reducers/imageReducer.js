import { FETCH_IMAGES } from '../actions/types';

const  imageReducer = (state = [] , action) => {
    switch (action.type) {
        case FETCH_IMAGES:
            return action.payload;
        default:
            return state;
    }
}

export default imageReducer;