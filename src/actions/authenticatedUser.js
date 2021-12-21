import {
    GET_AUTHENTICATED,
    SET_AUTHENTICATED
} from './types'

export function setAuthenticatedUser(id) {
    return {
        type: SET_AUTHENTICATED,
        id
    }
}