import React from 'react'

const accountCard = (props) => {
  return (
    <>
        <div className = 'card card-body'>
                        <div className='row'>
                            <h4 className='col'>Account Name: </h4>
                            <h4 className='col'>{props.name}</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Card Details: </h4>
                            <h4 className='col'>{props.cardNumber}</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Account Number: </h4>
                            <h4 className='col'>{props.accountNumber}</h4>
                        </div>
                        <div className='row'>
                            <div className='text-center'>
                                <button className='btn btn-danger me-3'>Remove Account</button>
                                <button className='btn btn-success '>Edit Account</button>
                            </div>        
                        </div>
                    </div>
    </>
  )
}

export default accountCard