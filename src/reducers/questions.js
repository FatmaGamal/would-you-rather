import {
    GET_QUESTIONS,
    ADD_QUESTION,
    GET_QUESTION,
    ANSWER_QUESTION
} from './../actions/types';

export default function questions(state = {}, action) {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const {question} = action;
            questions = {
                ...state,
                [question.id]: question
              }
              console.log('updates questions', questions);
            return (questions);
        default:
            return state
    }
}