import React, { Component } from 'react';

export default class AllInventoryList extends Component {
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
                                <tr>
                                    <td>
                                        <div className='product'>
                                            <h5>Product Name</h5>
                                            <p>description</p>
                                        </div>
                                    </td>
                                    <td>05/24/2018</td>
                                    <td>Toronto, CAN</td>
                                    <td>12,000</td>
                                    <td>In Stock</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
