import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { GET_ERRORS, SET_LOGGED_IN_USER } from './types';
import setAuthToken from '../../utils/setAuthToken';

// Register user
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/auth/register', userData)
        .then(res => history.push('/login'))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

// Get JWToken for user
export const loginUser = userData => dispatch => {
    axios
        .post('/api/auth/login', userData)
        .then(res => {
            // get token from response
            const { token } = res.data;
            // save token to local storage
            localStorage.setItem('jwtToken', token);
            // set token to Authorization header
            setAuthToken(token);
            // decode jwt token
            const decodedToken = jwtDecode(token);
            // set user in local state
            dispatch(setLoggedInUser(decodedToken));
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
};

// Set logged in user
export const setLoggedInUser = currentUser => {
    return {
        type: SET_LOGGED_IN_USER,
        payload: currentUser
    };
};

// Log out user
export const logoutUser = () => dispatch => {
    // remove token from localstorage
    localStorage.removeItem('jwtToken');
    // remove the auth header
    setAuthToken(false);
    // remove user from local state and remove authentication
    dispatch(setLoggedInUser({}));
};
