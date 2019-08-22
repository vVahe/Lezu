import axios from 'axios';
import { REGISTER, GET_ERRORS } from './types';

export const registerUser = userData => dispatch => {
    axios
        .post('/auth/register', userData)
        .then(res => {})
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};
