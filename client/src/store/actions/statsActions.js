import axios from 'axios';
import { GET_ERRORS, SET_STATS } from './types';

export const getStats = () => async dispatch => {
    try {
        const results = await axios.get('/api/stats/all_stats');
        const {
            nr_words,
            nr_lists,
            nr_languages,
            nr_words_correct,
            nr_words_reviewed,
            nr_words_incorrect,
            recent_words,
            difficult_words
        } = results.data;

        dispatch({
            type: SET_STATS,
            nr_words,
            nr_lists,
            nr_languages,
            nr_words_correct,
            nr_words_reviewed,
            nr_words_incorrect,
            recent_words,
            difficult_words
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        });
    }
};
