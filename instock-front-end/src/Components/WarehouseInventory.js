import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
import { fetchRequest } from './functions';

const baseURL = 'http://localhost:8080'
const api_key = '?api_key=edward'

export default class WarehouseInventory extends Component {
    state = {
        warehouseInventory: []
    }

    componentDidMount() {
        const whId = this.props.match.params.id;
        let URL = `${baseURL}/warehouses/${whId}${api_key}`;
        fetchRequest('GET', URL, (data) => {
            this.setState({
                warehouseInventory: data
            })
        })
    }

    componentDidUpdate(prevProps) {
        // debugger;
        const prevId = prevProps.match.params.id;
        const whId = this.props.match.params.id;
        let URL = `${baseURL}/warehouses/${whId}${api_key}`;
        if(whId !== prevId) {
            fetchRequest('GET', URL, (data) => {
                this.setState({
                    warehouseInventory: data
                })
            })
        }
    }

    render () {
        return (
            <div className='inventoryList'>
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
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.warehouseInventory.map(item => {
                                return (
                                <tr>
                                    <td>
                                        <div className='product'>
                                            <h4>{item.product}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </td>
                                    <td>{item.date}</td>
                                    {/* <td>{item.lastOrdered}</td> */}
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