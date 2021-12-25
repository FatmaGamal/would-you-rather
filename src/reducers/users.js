import {
    GET_USERS,
    ADD_QUESTION,
    ANSWER_QUESTION
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
            return {
                ...state,
                [question.author]: {
                    ...state[question.author],
                    questions : state[question.author].questions.concat([question.id])
                }
            }
        case ANSWER_QUESTION:
            const {qid, answer, authedUser} = action;
            return {
                ...state,
                [authedUser]: {
                  ...state[authedUser],
                  answers: {
                    ...state[authedUser].answers,
                    [qid]: answer
                  }
                }
              }
        default:
            return state
    }
}