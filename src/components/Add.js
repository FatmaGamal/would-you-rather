import React from 'react';

import { connect } from 'react-redux';
import { Form, Button } from 'react-bootstrap'
import './Add.css';

class Add extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('e', e)
    }

    render() {
        return(
        <div className="msg-container">
            <div className="msg login">
                <p>Welcome to WOULD YOU RATHER</p>
                <p>Please select a user to log in</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Select size="md" className="login-form">
                        <option key="disabled" disabled>Choose a user to sign in</option>
                        {Object.values(this.props.users).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
                    </Form.Select>
                    <Button className="action submit-btn" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
        )
    }
}

function mapStateToProps({users}) {
    return {users}
}
export default connect(mapStateToProps)(Add);