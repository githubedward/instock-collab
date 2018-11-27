import React, { Component } from 'react';
import '../styles/App.css';
import {Link} from 'react-router-dom';
import { fetchRequest } from './functions';

const baseURL = 'http://localhost:8080'
const api_key = '?api_key=edward'

export default class InventoryDetail extends Component {
    state = {
        itemDetail: null
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        let URL = `${baseURL}/inventory/${id}${api_key}`;
        fetchRequest('GET', URL, (data) => {
            this.setState({
                itemDetail: data
            })
        })
    }

    // componentDidUpdate(prevProps) {

    // }

    renderDetails() {
        const { /* id, warehouseId, */ product, description, lastOrdered, location, quantity, status, orderedBy, reference, category } = this.state.itemDetail;
        return <div className='product-div'>
                <Link to='/inventory' className='product-back'>
                    <img src="/Assets/Icons/Back Arrow.svg" alt="back-arrow"/> Back
                </Link>
                <div className='product'>
                    <div className='product-details'>
                        <div className='product-details__title'>{ product } Summary</div>
                        <div className='product-details__description product-details__text'>
                            <span>DESCRIPTION: </span><span>{ description }</span>
                        </div>
                        <div className='product-details__lastOrder product-details__text'>LAST ORDERED: { lastOrdered }</div>
                        <div className='product-details__orderedBy product-details__text'>ORDERED BY: { orderedBy }</div>
                        <div className='product-details__ref product-details__text'>REFERENCE: { reference }</div>
                        <div className='product-details__category product-details__text'>CATEGORY: { category }</div>
                        <div className='product-details__quantity product-details__text'>QUANTITY: { quantity }</div>
                        <div className='product-details__location product-details__text'>LOCATION: { location }</div>
                        <div className='product-details__status product-details__text'>STATUS: { status }</div>
                    </div>
                    {/* <div className='product-new'> */}
                    <button className='product-new'>New Order</button>
                    {/* </div> */}
                </div>
            </div>
    }

    render() {
        return (
            this.state.itemDetail ? this.renderDetails() : null
        )
    }
}