import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <aside className="navbar-container">
                <div className="navbar-logo">
                    <object className="navbar-logo__img" data='Assets/Wordmark/Wordmark.svg' type="image/svg+xml">
                        <img className="navbar-logo__img" src='Assets/Wordmark/Wordmark.svg' />
                    </object>
                </div>
                <div className='navbar'>
                    <div className="navbar-inventory">
                        <object className="navbar-inventory__img" data='Assets/Icons/Inventory.svg' type="image/svg+xml">
                            <img className="navbar-inventory__img" src='Assets/Icons/Inventory.svg' />
                        </object>
                        <p className="navbar-inventory__text">Inventory</p>
                    </div>
                    <div className="navbar-locations">
                        <object className="navbar-location__img" data='Assets/Icons/Location.svg' type="image/svg+xml">
                            <img className="navbar-location__img" src='Assets/Icons/Location.svg' />
                        </object>
                        <p className="navbar-locations__text">Locations</p>
                    </div>
                    <div className="navbar-users">
                        <object className="navbar-user__img" data='Assets/Icons/User.svg' type="image/svg+xml">
                            <img className="navbar-user__img" src='Assets/Icons/User.svg' />
                        </object>
                        <p className="navbar-users__text">Users</p>
                    </div>
                </div>
            </aside>
        )
    }
}