import { SET_WORDLIST } from '../actions/types';

const initialState = {
    words: {},
    loaded: false
};

export default function(state = initialState, payload) {
    switch (payload.type) {
        case SET_WORDLIST:
            return {
                ...state,
                words: payload,
                loaded: true
            };
        default:
            return state;
    }
}
