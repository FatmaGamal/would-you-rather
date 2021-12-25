import { 
    ADD_QUESTION,
    GET_QUESTIONS, 
    ANSWER_QUESTION
} from './types';

import { 
    _saveQuestion,
    _saveQuestionAnswer
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

export function answerQuestion({qid, answer, authedUser}) {
    return  {
        type: ANSWER_QUESTION,
        qid,
        answer,
        authedUser
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

export function handleAnswerQuestion({qid, answer, authedUser}) {
    return (dispatch) => {
        return _saveQuestionAnswer({
            authedUser,
            qid,
            answer
        }).then(() => {
            return dispatch(answerQuestion({qid, answer, authedUser}))
        })
    }
}