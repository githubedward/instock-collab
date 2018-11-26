import React, { Component } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default class AllInventoryList extends Component {
    state = {
        inventory: []
    }

    // fetch request to grab item data to update state
    componentDidMount() {
        fetch("http://localhost:8080/inventory")
          .then( (response) => response.json())
          .then(data => this.setState({
              inventory: data
          }))
        };
    
    // function used to pass item id to delete end point. deletes item from API
    // and updates state
    deleteItem = (e) => {
        e.preventDefault();
        let targetId = e.target.id;
        console.log(targetId);
        const init = {
            method: 'DELETE'
        }
        fetch('http://localhost:8080/inventory/'+ targetId, init)
        .then( (response) => {response.json()})
        .then(data => {
            fetch('http://localhost:8080/inventory')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    inventory: data
                })
            })
        })
    }

    displayInstock = (status) => {
        if (Boolean(status) === true) {
            return "In Stock"
        } else return "Out of Stock"
    }
    
    // returns the item data in state as a table
    render() {
        return (
            <div className='displayList'>
                <div className='displayList-titleBar'>
                    <div className='displayList-titleBar__text'> Inventory </div>
                    <button className='displayList-titleBar__button' type='button' name='filter-button'>Filter</button>
                </div>
                <div className='inventoryContainer'>
                    {/* <h1>Inventory</h1> */}
                    <div className='tableContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Last Ordered</th>
                                    <th>Location</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.inventory.map(item => {
                                return (
                                <tr id={item.id}>
                                    <td>
                                        <div className='product'>
                                            <h4>{item.product}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </td>
                                    <td>{item.lastOrdered}</td>
                                    <td>{item.location}</td>
                                    <td>{item.quantity}</td>
                                    <td>{this.displayInstock(item.status)}</td>
                                    <td>
                                        <i className='deleteIcon'>
                                            <FaTrashAlt id={item.id}
                                            onClick={this.deleteItem}/>
                                        </i>
                                    </td>
                                </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
