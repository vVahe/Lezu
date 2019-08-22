import { REGISTER } from '../actions/types';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
