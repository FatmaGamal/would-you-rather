import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAnswerQuestion } from './../actions/questions';
import Error from './Error';

import { Form, Button } from 'react-bootstrap';
import './Question.css';

class Question extends React.Component {
    state = {
        answer: '',
        selected: '',
        redirect: false
    }

    handleOnRadioCheck = (e) => {
        this.setState({answer: e.target.name});
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer) {
            this.props.dispatch(handleAnswerQuestion({
                authedUser: this.props.authenticatedUser.id, 
                qid:this.props.match.params.id, 
                answer: this.state.answer
            }));
            this.setState({redirect: true});
        }
    }

    render () {
        let qId = this.props.match.params.id;
        let question = this.props.questions[qId];
        let mode, author, selected, totalVotes;
        if (question) {
            mode = this.props.location.search.includes('show') ? 'answered' : 'question';
            author = this.props.users[question.author];
            selected = this.props.authenticatedUser.answers[question.id] || null;
            totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;
        }


        return (
            this.state.redirect ? <Redirect to="/"/> : question ? 
            <div className="container">

                <div className="question-card">
                    <img className="question-img" src={author.avatarURL} alt={author.name} />
                    {mode === 'question' && (
                    <div className="question-options">
                        <p className="text-lg">Would You Rather...</p>
                        <Form onChange={(e) => this.handleOnRadioCheck(e)} onSubmit={(e) => this.handleOnSubmit(e)}>
                            <Form.Check  key="optionOne" type='radio' id="optionOne" name="optionOne" label={question.optionOne.text} />
                            <Form.Check  key="optionTwo" type='radio' id="optionTwo" name="optionTwo" label={question.optionTwo.text} />
                            <Button type="submit" className="action submit-btn text-center">Submit</Button>
                        </Form>
                    </div>
                    )}
                    {mode === 'answered' && (
                    <div className="question-options">
                        <p className="text-lg">Results</p>
                        <div className={`question-option ${selected === 'optionOne' ? 'selected': null}`}>
                            <div>I would rather {question.optionOne.text}</div>
                            <span>{question.optionOne.votes.length} out of {totalVotes}</span>
                            </div>
                        <div className={`question-option ${selected === 'optionTwo' ? 'selected': null}`}>
                            <div>I would rather {question.optionTwo.text}</div>
                            <span>{question.optionTwo.votes.length} out of {totalVotes}</span>
                        </div>
                    </div>
                    )}
                </div>
            </div> : <Error />
        )
    }
}

function mapStateToProps({authenticatedUser, questions, users}) {
    return {
        questions,
        users,
        authenticatedUser: users[authenticatedUser]
    }
}

export default connect(mapStateToProps)(Question);