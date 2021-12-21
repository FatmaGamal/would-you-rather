import React from 'react';

import { Route, Switch } from 'react-router-dom'

import Home from './Home';
import Question from './Question';
import Leaderboard from './Leaderboard';
import Error from './Error';


const Show = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/question/:id' component={Question} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route><Error /></Route>
        </Switch>
    );
}

export default Show;