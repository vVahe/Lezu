import axios from 'axios';
import { GET_CATEGORY } from './types';

export const getCategories = () => dispatch => {
    axios
        .get('/api/category/all_categories')
        .then(res =>
            dispatch({ type: GET_CATEGORY, payload: res.data.categories })
        )
        .catch(err => console.log(err));
};
