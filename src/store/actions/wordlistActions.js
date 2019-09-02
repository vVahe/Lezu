import axios from 'axios';
import { GET_ERRORS, SET_WORDLIST } from './types';

export const getWordlist = () => dispatch => {
    axios
        .get('/words/all_words')
        .then(res => {
            console.log(res.data);
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
