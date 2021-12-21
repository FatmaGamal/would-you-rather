import { 
    ADD_QUESTION,
    GET_QUESTIONS, 
    GET_QUESTION,
    ANSWER_QUESTION
} from './types';

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

/*
export const getQuestions = () => dispatch => {
    __getQuestions().then((questions) => {
        dispatch({
            type: GET_QUESTIONS,
            payload: {questions}
        })
    })
} 
 */