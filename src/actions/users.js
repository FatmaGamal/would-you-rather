import {
    GET_USERS,
    GET_AUTHENTICATED
} from './types'

export function getUsers(users) {
    return {
        type: GET_USERS,
        users
    }
}