import React from 'react';

import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';

import { Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Add from './components/Add';
import Show from './components/Show';
import Login from './components/Login';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    //get initial data needed for home
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <Header />
        {this.props.loading === true ? null : 
        <>
        <Switch>
        <Route path='/add' component={Add} />
        <Route path='*' component={Show}/>
        </Switch>
        </>
        }
        </div>
      );
    }
}

function mapStateToProps ({authenticatedUser}) {
  return {
    loading : authenticatedUser === null
  }
}

export default connect(mapStateToProps)(App);
