import React from 'react';

import { connect } from 'react-redux';
import { handleAddQuestion } from './../actions/questions';


import { Form, Button } from 'react-bootstrap'
import './Add.css';

class Add extends React.Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleOnInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        /* why isn't debugger showing me this correctly?! */
        e.preventDefault();
        if (this.state.optionOne.value && this.state.optionTwo.value) {
            console.log('here')
            debugger;
            this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo, this.props.authenticatedUser));
            this.setState({
                optionOne: '',
                optionTwo: ''
            });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="question-card">
                <p>Would You rather...</p>
                <Form className="add-question-form" onChange={(e) => this.handleOnInputChange(e)} onSubmit={this.handleSubmit}>
                    <Form.Control size="md" type="text" name="optionOne" placeholder="Option 1" />
                    <div className="text-center">OR</div>
                    <Form.Control size="md" type="text" name="optionTwo" placeholder="Option 2" />
                    <Button className="action submit-btn text-center" type="submit">
                        Save
                    </Button>
                </Form>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ users, authenticatedUser }) {
    return { 
        users,
        authenticatedUser
    }
}
export default connect(mapStateToProps)(Add);