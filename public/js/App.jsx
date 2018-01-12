import React, { Component, PropTypes } from 'react';

import Home from './Home';
import Header from './Header';
import Example from './Example';

import { Route, Switch } from 'react-router-dom'

import '../style.less';

export default class App extends Component {
    render() {
        return (
            <div className="main-container">
                <Header/>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/example' component={Example} />
                </Switch>
            </div>
        );
    }
}
