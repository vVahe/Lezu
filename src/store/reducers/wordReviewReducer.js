import {
    SET_TO_REVIEW_WORDS,
    REMOVE_TO_REVIEW_WORDS,
    UPDATE_WORD_IN_REVIEW,
    WORD_CORRECT,
    WORD_INCORRECT
} from '../actions/types';

const initialState = {
    words: [],
    counter: 0,
    loaded: false,
    result: 'none'
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_TO_REVIEW_WORDS:
            return {
                ...state,
                words: action.payload,
                // word_in_review: this.state.words[0],
                loaded: true
            };
        case UPDATE_WORD_IN_REVIEW:
            return {
                ...state,
                counter: action.count,
                result: 'none'
            };
        case WORD_CORRECT:
            return {
                ...state,
                result: 'correct'
            };
        case WORD_INCORRECT:
            return {
                ...state,
                result: 'incorrect'
            };
        case REMOVE_TO_REVIEW_WORDS:
            return {
                ...state,
                words: [],
                word_in_review: {},
                counter: 0,
                loaded: false
            };
        default:
            return state;
    }
}
