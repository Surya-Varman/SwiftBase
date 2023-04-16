import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
const index = () => {
  return (
    <>
        <div className='m-5 p-2 container border-info border shadow-sm'>
                <div className='row'>
                    <div className='col col-lg-5 col-md-6 col-sm-12'>
                        This is where image goes
                        
                    </div>
                    <div className='col'>
                        <div className='row'>
                          Name
                        </div>
                        <div className='row'>
                          Price
                        </div>
                        <div className='row'>
                        Quantity:
                          <div className='col'>
                            <input type="number"/>
                          </div>
                        </div>
                        <div className='row text-left'>
                            <div className='p-1'>
                                <button className='btn removeLeftPadding'><AiFillDelete/> Delete</button>
                            </div>
                        </div>
                        <div className='row'>
                        Total Price
                        </div>
                    </div>
                    
                </div>
        </div>
        <div className='m-5 p-2 container border-info border shadow-sm'>
                <div className='row'>
                    <div className='col col-lg-5 col-md-6 col-sm-12'>
                        This is where image goes
                        
                    </div>
                    <div className='col'>
                        <div className='row'>
                          Name
                        </div>
                        <div className='row'>
                          Price
                        </div>
                        <div className='row'>
                        Quantity:
                          <div className='col'>
                            <input type="number"/>
                          </div>
                        </div>
                        <div className='row text-left'>
                            <div className='p-1'>
                                <button className='btn removeLeftPadding'><AiFillDelete/> Delete</button>
                            </div>
                        </div>
                        <div className='row'>
                        Total Price
                        </div>
                    </div>
                    
                </div>
        </div>
        <div className='m-5 p-2 container border-info border shadow-sm'>
                <div className='row'>
                    <div className='col col-lg-5 col-md-6 col-sm-12'>
                        This is where image goes
                        
                    </div>
                    <div className='col'>
                        <div className='row'>
                          Name
                        </div>
                        <div className='row'>
                          Price
                        </div>
                        <div className='row'>
                        Quantity:
                          <div className='col'>
                            <input type="number"/>
                          </div>
                        </div>
                        <div className='row text-left'>
                            <div className='p-1'>
                                <button className='btn removeLeftPadding'><AiFillDelete/> Delete</button>
                            </div>
                        </div>
                        <div className='row'>
                        Total Price
                        </div>
                    </div>
                    
                </div>
        </div>
        <div className='text-center'>
          <button className='btn btn-danger'>Checkout</button>
        </div>
       
    </>
  )
}

export default index