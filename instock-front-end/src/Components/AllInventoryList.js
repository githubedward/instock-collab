import React, { Component } from 'react';

export default class AllInventoryList extends Component {
    componentDidMount() {
        fetch("http://localhost:8080/inventory")
          .then( (response) => response.json())
          .then(data => this.props.inventoryData(data));
          };
      
    
    render() {
        return (
            <div className='inventoryList'>
                <div className='inventoryContainer'>
                    <h1>Inventory</h1>
                    <div className='tableContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Last Ordered</th>
                                    <th>Location</th>
                                    <th>Quantity</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.inventoryArray.map(item => {
                                return (
                                <tr>
                                    <td>
                                        <div className='product'>
                                            <h4>{item.product}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </td>
                                    <td>{item.date}</td>
                                    <td>{item.location}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.status}</td>
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
