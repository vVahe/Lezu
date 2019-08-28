import { SET_LOGGED_IN_USER } from '../actions/types';
import isEmpty from '../../utils/isEmpty';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_LOGGED_IN_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
}
