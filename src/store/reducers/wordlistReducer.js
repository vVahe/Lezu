import { SET_WORDLIST } from '../actions/types';

const initialState = {
    words: [],
    message: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_WORDLIST:
            return {
                ...state,
                words: action.payload
            };
        default:
            return state;
    }
}
