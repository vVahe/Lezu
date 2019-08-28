import axios from 'axios';

// set axios header config
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
