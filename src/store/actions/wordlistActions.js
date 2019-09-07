import axios from 'axios';
import { GET_ERRORS, SET_WORDLIST } from './types';

export const getWordlist = () => dispatch => {
    axios
        .get('/words-retrieve/all_words')
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
        .post('/words-modify/delete_word/' + word_id)
        .then(res => {
            dispatch(getWordlist());
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
        });
};

export const addWord = (word, history) => dispatch => {
    // store category ids in array
    let idsArr;
    if (word.categories) {
        idsArr = word.categories.map(cat => {
            return cat.value;
        });
    }

    const newWord = {
        word: word.word.toLowerCase().trim(),
        word_meaning: word.word_meaning.toLowerCase().trim(),
        language_id: word.language ? word.language.value : '',
        categories: idsArr ? idsArr.join(',') : ''
    };

    console.log(newWord);

    axios
        .post('/words-modify/add_word', newWord)
        .then(res => {
            dispatch(getWordlist());
            history.push('/word-list');
        })
        .catch(err => {
            dispatch({ type: GET_ERRORS, payload: err.response.data });
        });
};
