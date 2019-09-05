import axios from 'axios';
import { SEARCH_LANGUAGE } from './types';

export const searchLanguage = input => async dispatch => {
    await axios
        .get('/language/search/' + input)
        .then(res =>
            dispatch({ type: SEARCH_LANGUAGE, payload: res.data.languages })
        )
        .catch(err => console.log(err));
};
