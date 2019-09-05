import { SEARCH_LANGUAGE } from '../actions/types';

const initialState = {
    languages: [],
    loading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SEARCH_LANGUAGE:
            return { ...state, languages: action.payload };
        default:
            return state;
    }
}
