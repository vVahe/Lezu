import {
    SET_WORDLIST,
    DELETE_WORD,
    SET_WORDLIST_MESSAGE
} from '../actions/types';

const initialState = {
    words: [],
    message: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_WORDLIST:
            return {
                ...state,
                words: action.payload,
                loaded: true
            };
        case DELETE_WORD:
            return {
                ...state,
                words: action.payload
            };
        case SET_WORDLIST_MESSAGE:
            return {
                ...state,
                message: action.payload
            };
        default:
            return state;
    }
}
