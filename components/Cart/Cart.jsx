import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import axios from 'axios';

const Cart = (props) => {
    function handleChangeQuantity(){
        console.log(props.productId);
        const quantity = prompt('Enter new quantity: ');
        axios.post('/api/Cart/modifyCart',{userid: localStorage.getItem('userid'),productId: props.productId,quantity: quantity});
    }
    function handleDelete(){
        axios.post('/api/Cart/modifyCart',{userid: localStorage.getItem('userid'),productId: props.productId,quantity:0}).then(
            alert('Item deleted from cart')
        );
    }
    
  return (
    <div>
        <div className='m-5 p-2 container border-info border shadow-sm'>
                <div className='row'>
                    <div className='col col-lg-5 col-md-6 col-sm-12'>
                        This is where image goes
                        
                    </div>
                    <div className='col'>
                        <div className='row'>
                          <div className='col-3'>
                              <h6>Name:</h6>
                          </div>
                          <div className='col'>
                              {props.name}
                          </div>
                        </div>
                        <div className='row'>
                        <div className='col-3'>
                              <h6>Price:</h6>
                          </div>
                          <div className='col'>
                              {props.price}
                          </div>
                        </div>
                        <div className='row'>
                        <div className='col-3'>
                              <h6>Quantity:</h6>
                          </div>
                          <div className='col'>
                              {props.quantity}
                          </div>
                        </div>

                        <div className='row'>
                        <div className='col-3'>
                              <h6>Total Price:</h6>
                          </div>
                          <div className='col'>
                              {props.totalPrice}
                          </div>
                        </div>
                        <div className='row text-left'>
                            <div className='p-1 col-3'>
                                <button className='btn removeLeftPadding' onClick={handleDelete}><AiFillDelete/> Delete</button>
                            </div>
                            <div className='col'>
                                <button className='btn btn-primary' onClick={handleChangeQuantity}>Change quantity</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}

export default Cart