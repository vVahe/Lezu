import { SET_WORDLIST } from '../actions/types';

const initialState = {
    words: [],
    loaded: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_WORDLIST:
            return {
                ...state,
                words: action.payload,
                loaded: true
            };
        default:
            return state;
    }
}
