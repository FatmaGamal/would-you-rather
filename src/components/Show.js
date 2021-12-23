import React from 'react';

import { Route, Switch, Link } from 'react-router-dom'

import Home from './Home';
import Question from './Question';
import Leaderboard from './Leaderboard';
import Error from './Error';
import "./Show.css"


const Show = () => {
    return (
        <>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/question/:id' component={Question} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route><Error /></Route>
        </Switch>
        <Link to="/add"><button className="action floating-btn"><div className="add"></div></button></Link>
        </>
    );
}

export default Show;