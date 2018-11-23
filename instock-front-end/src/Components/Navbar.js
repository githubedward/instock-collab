import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <aside className="navbar-container">
                <div className="navbar-logo">
                        <img className="navbar-logo__img" src='Assets/Wordmark/Wordmark.svg' />
                </div>
                <div className='navbar'>
                    <Link to='/inventory'>
                        <div className="navbar-inventory">
                            <img className="navbar-inventory__img" src='Assets/Icons/Inventory.svg' />
                            <p className="navbar-inventory__text">Inventory</p>
                        </div>
                    </Link>
                    <Link to='/warehouses'>
                        <div className="navbar-locations">
                            <img className="navbar-location__img" src='Assets/Icons/Location.svg' />
                            <p className="navbar-locations__text">Locations</p>
                        </div>
                    </Link>
                    <Link to='/users'>
                        <div className="navbar-users">
                            <img className="navbar-user__img" src='Assets/Icons/User.svg' />
                            <p className="navbar-users__text">Users</p>
                        </div>
                    </Link>
                </div>
            </aside>
        )
    }
}