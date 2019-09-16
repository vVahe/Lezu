import { SET_STATS } from '../actions/types';

const initialState = {
    recent_words: [],
    difficult_words: [],
    nr_word: null,
    nr_lists: null,
    nr_languages: null,
    nr_words_reviewed: null,
    nr_words_correct: null,
    nr_words_incorrect: null
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_STATS:
            return {
                ...state,
                recent_words: action.recent_words,
                difficult_words: action.difficult_words,
                nr_word: action.nr_word,
                nr_lists: action.nr_lists,
                nr_languages: action.nr_languages,
                nr_words_reviewed: action.nr_words_reviewed,
                nr_words_correct: action.nr_words_correct,
                nr_words_incorrect: action.nr_words_incorrect
            };
        default:
            return state;
    }
}
