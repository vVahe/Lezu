import axios from 'axios';

/** Set axios header config, when the user is authenticated autocatically
    add the token to the authorization header of every HTTP request. If the user is
    unauthenticated remove the authorization header 
    @param token of the logged in user 
    @modifies headers of axios calls 
    @returns none 
*/
const setAuthToken = token => {
    if (token) {
        // Apply auth header to every request
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;
