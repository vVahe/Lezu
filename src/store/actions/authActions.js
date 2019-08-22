import { REGISTER } from './types';

export const registerUser = userData => {
    return {
        type: REGISTER,
        payload: userData
    };
};
