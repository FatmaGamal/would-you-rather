import React from 'react';

import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import './Header.css'


class Header extends React.Component {
    render() {
        return(
        <header className="header">
            <div className="header__left">
                <img className="header-action header-logo" src='./logo.png' as={Link} to={'/'} />
                <div className="header-action header-icon leaderboard" as={Link} to={'/leaderboard'}></div>
            </div>
            <div className="header__right">
                <div className="header-action"><i className="header-icon profile"></i><span>Hello Here</span></div>
                {/* authenticated must be handled */}
                <button className="header-action" as={Link} to={'/login'}>Logout</button>
            </div>

        </header>
        )
    }
}

function mapStateToProps(props) {
    console.log('authed', props)
    return {/*  user: props.users[props.authenticatedUser] */}
}
export default connect(mapStateToProps)(Header);