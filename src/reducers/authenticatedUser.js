import {
    SET_AUTHENTICATED
} from './../actions/types';

export default function authenticatedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHENTICATED:
            return action.id
        default:
            return state
    }
}