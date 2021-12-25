import React from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './Header.css'


class Header extends React.Component {
    render() {
        return(
        <header className="header">
            <div className="header__left">
                <Link to='/'><img className="action header-logo" src='./logo.png'  alt="logo" /></Link>
                <Link className="action header-icon leaderboard" to='/leaderboard'></Link>
            </div>
            <div className="header__right">
                <div><img className="header-icon profile" src={this.props.user.avatarURL} alt={this.props.user.name} /><span>{this.props.user.name}</span></div>
                <Link to="/login"><button className="action">Logout</button></Link>
            </div>

        </header>
        )
    }
}

function mapStateToProps({authenticatedUser, users}) {
    return { 
        user: users[authenticatedUser]
    }
}
export default connect(mapStateToProps)(Header);