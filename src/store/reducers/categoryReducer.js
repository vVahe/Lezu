import { SEARCH_CATEGORY } from '../actions/types';

const initialState = {
    categories: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_CATEGORY:
            return { ...state, categories: action.payload };
        default:
            return state;
    }
}
