import React from 'react';

import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap'
import QuestionTeaser from './QuestionTeaser'

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

class Home extends React.Component {
    render() {
        return(
            <div className="container">
                <Tabs defaultActiveKey="unanswered" id="wyr-tabs" className="questions-tabs">
                    <Tab eventKey="unanswered" title="UnAnswered">
                        <div className="questions-list">
                        {this.props.questions.map(question => <QuestionTeaser key={question.id} q={question} author={this.props.users[question.author]} mode="q"/>)}
                        </div>
                    </Tab>
                    <Tab eventKey="answered" title="Answered">
                        <div className="questions-list">
                        {this.props.answered.map(answeredQ => <QuestionTeaser key={answeredQ.id} q={answeredQ}  author={this.props.users[answeredQ.author]} mode="show"/>)}
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

function mapStateToProps({authenticatedUser, questions, users}) {
    return {
        answered: Object.values(questions).filter(question => (users[authenticatedUser].answers[question.id])).sort((a, b) => b.timestamp - a.timestamp),
        questions: Object.values(questions).filter(question => (!users[authenticatedUser].answers[question.id])).sort((a, b) => b.timestamp - a.timestamp),
        users
    }
}

export default connect(mapStateToProps)(Home);