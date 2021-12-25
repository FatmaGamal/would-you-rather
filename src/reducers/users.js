import {
    GET_USERS,
    ADD_QUESTION
} from './../actions/types';

export default function users(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_QUESTION:
            const {question} = action;
            users = {
                ...state,
                [question.author]: {
                    questions : state[question.author].questions.concat([question.id])
                    /* TODO: why isn't this working ?! it gives a red line here in VSCode */
                    /* {
                        ...users[users.id].questions,
                        [question.id]
                    } */ 
                }
            }
            return (users);
        default:
            return state
    }
}