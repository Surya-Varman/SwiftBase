import React from 'react'

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div className='row'>
        <div className="card text-white bg-success col-3 ms-auto m-3">
          <div className="card-header"><h5>Revenue</h5></div>
          <div className="card-body">
            <div className='row'>
              <h5 className="card-title col">Net Revenue</h5>
              <h5 className='col-4'>$500</h5>
            </div>
            <div className='row'>
              <h5 className="card-title col">Cut by SwiftBuy</h5>
              <h5 className='col-4'>$50</h5>
            </div>
            <div className='row'>
              <h5 className="card-title col">Cut by Payment Inteface</h5>
              <h5 className='col-4'>$5</h5>
            </div>
            <p className="card-text">Here the net revenue is the net revenue after taxes(EBITA)</p>
            <div className='row'>
              <div className='card-footer col'><h5>Net Profit</h5></div>
              <div className='card-footer col-4'><h5>$445</h5></div>
            </div>

          </div>
          
        </div>
        <div className="card text-white bg-danger col-3 m-3 me-auto">
          <div className="card-header"><h5>Returns and Refunds</h5></div>
          <div className="card-body">
          <div className='row'>
              <h5 className="card-title col">Units Returned</h5>
              <h5 className='col-3'>9</h5>
            </div>
          <div className='row'>
              <h5 className="card-title col">Damaged Products</h5>
              <h5 className='col-3'>4</h5>
          </div>
          <div className='row'>
              <h5 className="card-title col">Unsatisfied Products</h5>
              <h5 className='col-3'>5</h5>
          </div>
          <div className='row'>
              <h5 className="card-title col">Other reason</h5>
              <h5 className='col-3'>0</h5>
          </div>
            <p className="card-text">The net revenue in the revenue section has already taken into account the amount refunded.</p>
          </div>
          
        </div>
    
        
      </div>

    </>
  )
}

export default Dashboard