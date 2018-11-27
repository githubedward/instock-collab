import React, { Component } from 'react';
import '../styles/App.css';
// import {BrowserRouter as Router, Route, withRouter, Switch, Redirect} from 'react-router-dom';



export default class Header extends Component {

    

    render() {

        const avatarUrl =['https://media.licdn.com/dms/image/C5103AQGvdtN4Ic9V9w/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=swL8HzZBSukBtCFiXoKWYI7f2Wku6CTF4lmDFlCqBJ4', "https://media.licdn.com/dms/image/C5603AQHtvCohEUWq7Q/profile-displayphoto-shrink_100_100/0?e=1548288000&v=beta&t=wGGhI7cnHlTJdb81-TtPGD1St7-Xg4rJM3AU0Jxq3Uc", 'https://media.licdn.com/dms/image/C5603AQHoTMGEZE4CjQ/profile-displayphoto-shrink_800_800/0?e=1548892800&v=beta&t=TYZALZic3PCdFqj1Jhb9XUWhPkn2CG3qZIIIpWwRDnQ']

        return (
            <header className="header">
                <div className="header-search">
                    <label className="header-search__input">
                        <input type="text" name="searchInput" placeholder="Search"></input>
                    </label>
                    <img className="header-search__icon" src="/Assets/Icons/Search.svg" alt="Search Icon" />
                </div>
                <div className="header-profile">
                    {/* randomly shows image of each badger as profile avatar */}
                    <img className="header-profile__avatar" src={avatarUrl[Math.floor(Math.random()*avatarUrl.length)]}alt='user-avatar'/>
                    <img className="header-profile__dropdown" src='/Assets/Icons/Dropdown.svg' alt="dropdown" />
                </div>
            </header>
        )
    }
}