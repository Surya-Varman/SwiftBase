import React from 'react'
import axios from 'axios'

const orderCard = (props) => {
    async function handleOTP(email){
        let unique_id = ""
        for (let i = 0; i < 7; i++) {
          unique_id += String(Math.floor(Math.random() * 10));
        }
        axios.post('/api/sendMail',{email: 'cs20b056@iittp.ac.in',OTP: unique_id});
        const response = prompt("Enter OTP");
        if(response === unique_id){
            alert("OTP verified");
        }
        else{
            alert("OTP not verified");
        }
    }
    async function handleUpdateWarehouse(){
        const newWarehouse = prompt("Enter new warehouse");
        await axios.post('/api/orders/updateWarehouse',{userid: props.userid,productId: props.productId,quantity: props.quantity,status: props.status,accountNumber: props.accountNumber,warehouse: newWarehouse,oldWarehouse: props.warehouse})
    }
    function handleUpdateStatus(){
        const newStatus = prompt("Enter new status");
        axios.post('/api/orders/updateStatus',{userid: props.userid,productId: props.productId,quantity: props.quantity,status: newStatus,accountNumber: props.accountNumber,warehouse: props.warehouse})
    }
  return (
    <>
                <div className = 'card card-body'>
                        <div className='row'>
                            <h4 className='col'>User id: </h4>
                            <h4 className='col'>{props.userid}</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Product Id: </h4>
                            <h4 className='col'>{props.productId}</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Quantity: </h4>
                            <h4 className='col'>{props.quantity}</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Status: </h4>
                            <h4 className='col'>{props.status}</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Account Number(Buyer): </h4>
                            <h4 className='col'>{props.accountNumber}</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Warehouse assigned: </h4>
                            <h4 className='col'>{props.warehouse}</h4>
                        </div>
                        
                        <div className='row'>
                            <div className='text-center '>
                                <button className='btn btn-success m-2' onClick={handleOTP}>GET OTP</button>
                                <button className='btn btn-danger m-2' onClick={handleUpdateWarehouse}>UPDATE WAREHOUSE</button>
                                <button className='btn btn-warning m-2' onClick={handleUpdateStatus}>UPDATE STATUS</button>
                            </div>        
                        </div>
                    </div>
    </>
  )
}

export default orderCard