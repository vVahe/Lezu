import axios from 'axios';
import { GET_LANGUAGE } from './types';

export const getLanguages = () => dispatch => {
    axios
        .get('/api/language/all_languages')
        .then(res =>
            dispatch({ type: GET_LANGUAGE, payload: res.data.languages })
        )
        .catch(err => console.log(err));
};
