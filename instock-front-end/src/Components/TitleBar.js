import React, { Component } from 'react';
import '../styles/App.css';
import {withRouter} from 'react-router-dom';

class TitleBar extends Component {
    state = {
      title: ''
    }

    componentDidMount() {
        this.renderTitle(this.props.location.pathname)
    }

    componentDidUpdate(prevProps) {
        const oldPath = prevProps.location.pathname;
        const newPath = this.props.location.pathname;
        if (newPath !== oldPath) {
            this.renderTitle(newPath)
        }
        // newPath !== oldPath ?  : null;
    }

    renderTitle(path) {
        if (path === '/warehouses') {
            this.setState({
                title: 'Locations'
            })   
        } else if (path === '/inventory') {
            this.setState({
                title: 'Inventory'
            })   
        } else if (path === '/users') {
            this.setState({
                title: 'Users'
            })
        }
    }


    render() {
        console.log(this.props)
      return (
        <div className='main-titleBar'>
          <div className='main-titleBar__text'> {this.state.title} </div>
          <button className='main-titleBar__button' type='button' name='filter-button'>Filter</button>
        </div>
        )
    }
}


export default withRouter(TitleBar)