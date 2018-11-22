import React, { Component } from 'react';
import '../styles/App.css';
// import {BrowserRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-search">
                    <label className="header-search__input">
                        <input type="text" name="searchInput" placeholder="Search"></input>
                    </label>
                    <img className="header-search__icon" src="Assets/Icons/Search.svg" alt="Search Icon" />
                </div>
                <div className="header-profile">
                    <img className="header-profile__avatar" src="https://media.licdn.com/dms/image/C5603AQHtvCohEUWq7Q/profile-displayphoto-shrink_100_100/0?e=1548288000&v=beta&t=wGGhI7cnHlTJdb81-TtPGD1St7-Xg4rJM3AU0Jxq3Uc" alt='user-avatar'/>
                    <object className="header-profile__dropdown" data='Assets/Icons/Dropdown.svg' type="image/svg+xml">
                        {/* <img className="header-profile__dropdown" src='Assets/Icons/Dropdown.svg' /> */}
                    </object>
                </div>
            </header>
        )
    }
}