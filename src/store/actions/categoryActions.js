import axios from 'axios';
import { SEARCH_CATEGORY, EMPTY_CATEGORY } from './types';

export const searchCategory = input => async dispatch => {
    await axios
        .get('/category/search/' + input)
        .then(res =>
            dispatch({ type: SEARCH_CATEGORY, payload: res.data.categories })
        )
        .catch(err => console.log(err));
};

export const emptyCategories = () => {
    return { type: EMPTY_CATEGORY };
};
