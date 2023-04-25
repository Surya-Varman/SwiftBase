import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import {useRouter} from 'next/router'
const modal = (props) => {
    const router = useRouter();
    const [accountNumber,setAccountNumber] = useState('');
    const [discountCoupon,setDiscountCoupon] = useState(''); 
    let totalCost = 0;
    for(let i=0;i<props.data.length;i++){
        totalCost += props.data[i].price*props.data[i].quantity;
        
    }
    async function handleCheckout(){
        try{
            let accountNumberCurrent = accountNumber;
            let warehouse = String(Math.floor(Math.random() * 10));
            const res = await axios.post('/api/payments', {userid: localStorage.getItem('userid'),accountNumber: accountNumber, discountCoupon: discountCoupon, totalCost: totalCost,swiftBuyCut: totalCost* 0.1, data: props.data});
            const orderSave = await axios.post('/api/payments/createOrder',{userid: localStorage.getItem('userid'),accountNumber: accountNumberCurrent,cart: props.data,warehouse: warehouse});
            router.push('/redirects/paymentSuccess')
        }
        catch(err){
            alert('Not enough balance')
        }
    }
  return (
    <>
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Checkout</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Account number:</label>
            <input type="text" className="form-control" id="recipient-name" onChange={(e) => setAccountNumber(e.target.value)} />
          </div>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Discount Coupon:</label>
            <input type="text" className="form-control" id="recipient-name" onChange = {(e) => setDiscountCoupon(e.target.value)}/>
          </div>
        </form>
        <div className='mb-3'>
            <div className='row'>
                <div className='col-6'>
                    <h3>Total Cost: </h3>
                </div>
                <div className='col'>
                    <h3>{totalCost}</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h3>Swift Buy Cut: </h3>
                </div>
                <div className='col'>
                <h3>{totalCost*0.1}</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h3>Net Payable: </h3>
                </div>
                <div className='col'>
                <h3>{totalCost + totalCost*0.1}</h3>
                </div>
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick = {handleCheckout}>Pay</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default modal