import { 
    ADD_QUESTION,
    GET_QUESTIONS, 
    GET_QUESTION,
    ANSWER_QUESTION
} from './types';

import { 
    _saveQuestion
} from '../_DATA';

export function getQuestions(questions) {
    return {
        type: GET_QUESTIONS,
        questions
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText, authenticatedUser) {
    return (dispatch) => {
        //dispatch(showLoading();
        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authenticatedUser
        }).then(question => {
            return dispatch(addQuestion(question))})
        //.then(dispatch(hideLoading));
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