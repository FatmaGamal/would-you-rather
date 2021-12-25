import React from 'react';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAnswerQuestion } from './../actions/questions';

import { Form, Button } from 'react-bootstrap';
import './Question.css';

class Question extends React.Component {
    state = {
        answer: null,
        selected: '',
        redirect: false
    }

    handleOnRadioCheck = (e) => {
        this.setState({answer: e.target.name});
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        if (this.state.answer) {
            this.props.dispatch(handleAnswerQuestion(this.props.authenticatedUser, this.props.match.params.id, this.state.answer));
            this.setState({redirect: true})
        }
    }

    render () {
        let qId = this.props.match.params.id;
        let question = this.props.questions[qId];
        let mode = this.props.location.search.includes('question') ? 'question' : 'answered';
        let author = this.props.users[question.author];
        let selected = this.props.authenticatedUser.answers[question.id] || null;
        let totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;


        return (
            this.state.redirect ? <Redirect to="/"/> :
            <div className="container">

                <div className="question-card">
                    <img className="question-img" src={author.avatarURL} />
                    {mode === 'question' && (
                    <div className="question-options">
                        <p className="text-lg">Would You Rather...</p>
                        <Form onChange={(e) => this.handleOnRadioCheck(e)} onSubmit={(e) => this.handleSubmit(e)}>
                            <Form.Check  key="optionOne" type='radio' id='optionOne' label={question.optionOne.text} />
                            <Form.Check  key="optionTwo" type='radio' id='optionTwo' label={question.optionTwo.text} />
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
                        <div className="question-option" className={`question-option ${selected === 'optionTwo' ? 'selected': null}`}>
                            <div>I would rather {question.optionTwo.text}</div>
                            <span>{question.optionTwo.votes.length} out of {totalVotes}</span>
                        </div>
                    </div>
                    )}
                </div>
            </div>
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