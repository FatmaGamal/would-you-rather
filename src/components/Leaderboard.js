import React from 'react';
import { connect } from 'react-redux';
import './Leaderboard.css'

class Leaderboard extends React.Component {
    render() {
        return (
        <div className="users-list">
            {this.props.users.map((user) => (
                <div key={user.id} className="user-card">
                    <img className="user-img" src={user.avatarURL} alt={user.name} />
                    <div className="user-info">
                        <div className="user-info__name">{user.name}</div>
                        <div>Asked : {user.questions.length}</div>
                        <div>Answered : {Object.keys(user.answers).length}</div>
                    </div>
                    <div className="user-total">
                        <span className="label">Total Score</span>
                        <div className="user-score">{user.total}</div>
                    </div>
                </div>
            ))}
        </div>
        );
    }
}

function mapStateToProps({users}) {
    return {
        users: Object.values(users).sort((a, b) => {
            b.total = b.questions.length + Object.keys(b.answers).length;
            a.total = a.questions.length + Object.keys(a.answers).length;

            return b.total-a.total;
        })
    }
}

export default connect(mapStateToProps)(Leaderboard);