import axios from 'axios';
import { GET_ERRORS, SET_WORDLIST } from './types';

export const getWordlist = () => dispatch => {
    axios
        .get('/words/all_words')
        .then(res => {
            dispatch(setWordlist(res.data));
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
        });
};

export const setWordlist = words => {
    return {
        type: SET_WORDLIST,
        payload: words
    };
};

export const deleteWord = word_id => dispatch => {
    axios
        .post('/words/delete_word/' + word_id)
        .then(res => {
            dispatch(getWordlist(true));
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
        });
};
