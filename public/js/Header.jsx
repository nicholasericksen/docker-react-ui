import React, { Component } from 'react';

import Menu from './Menu';

export default class Header extends Component {
    render() {
        const MAIN_MENU = [
            {
                label: 'Home',
                url: '/'
            },
            {
                label: 'Example',
                url: '/example'
            }
        ];
        return(
            <div>
                <h1 className="main-title">React Docker UI</h1>
                <div className="header">
                    <Menu
                        labels={MAIN_MENU}
                    />
                </div>
            </div>
        )
    }
}
