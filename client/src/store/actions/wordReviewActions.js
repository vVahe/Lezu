import axios from 'axios';
import {
    GET_ERRORS,
    REMOVE_TO_REVIEW_WORDS,
    SET_TO_REVIEW_WORDS,
    UPDATE_WORD_IN_REVIEW,
    WORD_CORRECT,
    WORD_INCORRECT,
    SHOW_RESULTS
} from './types';

export const getToReviewWords = url => dispatch => {
    axios
        .get('/api' + url)
        .then(res => {
            dispatch(setToReviewWords(res.data));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

export const setToReviewWords = words => {
    return {
        type: SET_TO_REVIEW_WORDS,
        payload: words
    };
};

export const removeToReviewWords = () => {
    return {
        type: REMOVE_TO_REVIEW_WORDS
    };
};

export const updateWordInReview = count => {
    return {
        type: UPDATE_WORD_IN_REVIEW,
        count
    };
};

export const setWordReview = (word_id, result) => dispatch => {
    axios
        .put(`/api/words-modify/update_word_reviewing/${word_id}/${result}`)
        .then(res => {
            if (result === 'correct') {
                dispatch(wordCorrect());
            } else {
                dispatch(wordInCorrect());
            }
        });
};

export const wordCorrect = () => {
    return {
        type: WORD_CORRECT
    };
};

export const wordInCorrect = () => {
    return {
        type: WORD_INCORRECT
    };
};

export const showResults = () => {
    return {
        type: SHOW_RESULTS
    };
};
