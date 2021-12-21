import { 
    _getUsers,
    _getQuestions
} from '../_DATA';
import { getUsers } from './users'
import { getQuestions } from './questions'
import { setAuthenticatedUser } from './authenticatedUser'

const AUTHENTICATED = 'johndoe';

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([_getUsers(), _getQuestions()]).then(res => {
            let users = res[0];
            let questions = res[1];
            dispatch(getQuestions(questions))
            dispatch(getUsers(users))
            dispatch(setAuthenticatedUser(AUTHENTICATED))
        })
    }
}