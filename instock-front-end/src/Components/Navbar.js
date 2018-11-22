import React, { Component } from 'react';
import {BrowserRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar-search">
                    <label className="navbar-search__input">
                        <input type="text" name="searchInput" placeholder="Search"></input>
                    </label>
                    <img className="navbar-search__icon" src="Assets/Icons/Search.svg" alt="Search Icon" />
                </div>
                <div className>

                </div>
            </nav>
        )
    }
}