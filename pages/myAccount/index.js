import React from 'react'
import {useUser} from '@auth0/nextjs-auth0/client'
import axios from 'axios';
import  {NotificationContainer, NotificationManager} from 'react-notifications';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import useSWR from 'swr'
import AccountCard from '@/components/accountCard'
async function fetcher(){
    const res = await axios.post('/api/accounts/getAccounts',{userid: localStorage.getItem('userid')})
    console.log(res);
    return res.data;
}
const index = () => {
        
    const [name,setName] = useState('');
    const [accountNumber,setAccountNumber] = useState('');
    const [cardNumber,setCardNumber] = useState('');
    const swrResponse = useSWR('Account',fetcher);
    const {user, error, isLoading} = useUser();  
    // if(accountError) return <h1>There is some error</h1>
    // if(!accounts) return  <h1>Data Loading....</h1>
    if(swrResponse.error) return <h1>{swrResponse.error}</h1>
    if(!swrResponse.data) return <h1>Data Loading....</h1>

    function handleName(e){
        setName(e.target.value);
    }
    function handleAccountNumber(e){
        setAccountNumber(e.target.value);
    }
    function handleCardNumber(e){
        setCardNumber(e.target.value);
    }
    async function addAccount(e){
        //prevent default
        e.preventDefault();
        axios.post('/api/accounts/addAccount',{userid: user.sub, accountNumber: accountNumber, accountName: name,cardNumber: cardNumber}).then(function(res){
            NotificationManager.success("Account Added Successfully");
        }).catch(function(err){
            NotificationManager.error("Error Adding Account");
        })
        
    }
    
  return (
    <div>
        <h1 className='text-center m-3'>My Account</h1>
        <div className='text-center m-5'>
            <div className='row'>
                <h4 className='col'>User Name: </h4>
                <h3 className='col'>{user && user.name}</h3>
            </div>
            <div className='row'>
                <h4 className='col'>User Email: </h4>
                <h4 className ='col'>{user && user.email}</h4>
            </div>
            <div className='row'>
                <h4 className='col'>User Id: </h4>
                <h4 className ='col'>{user?user.sub: "NULL"}</h4>
            </div>
        </div>
        <h1 className='text-center'>MANAGE ACCOUNT</h1>
        <div className='text-center m-3'>
            <div className='row'>
                <p>
                    <a className='btn btn-primary' data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Show Accounts</a>
                </p>
                <div className="collapse" id="collapseExample">
                    {swrResponse.data.map(function(item){
                        console.log(item);
                        return <AccountCard name={item.accountName} cardNumber={item.cardNumber} accountNumber={item.accountNumber} />
                    })}

                </div>
            </div>
        </div>
        <div className='text-center m-3'>
            <div className='row'>
                <p>
                    <a className='btn btn-primary' data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">My Transactions</a>
                </p>
                </div>
                <div className="collapse" id="collapseExample1">
                    <div className = 'card card-body'>
                        <div className='row'>
                            <h4 className='col'>Account Name: </h4>
                            <h4 className='col'>Surya Varman</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Card Details: </h4>
                            <h4 className='col'>1234-4567-8912-0987</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Account Number: </h4>
                            <h4 className='col'>#AEFGV1234-0987</h4>
                        </div>
                        <div className='row'>
                            <div className='text-center'>
                                <button className='btn btn-danger me-3'>Remove Account</button>
                                <button className='btn btn-success '>Edit Account</button>
                            </div>        
                        </div>
                    </div>
                    <div className = 'card card-body'>
                        <div className='row'>
                            <h4 className='col'>Account Name: </h4>
                            <h4 className='col'>Surya Varman</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Card Details: </h4>
                            <h4 className='col'>1234-4567-8912-0987</h4>
                        </div>
                        <div className='row'>
                            <h4 className='col'>Account Number: </h4>
                            <h4 className='col'>#AEFGV1234-0987</h4>
                        </div>
                        <div className='row'>
                            <div className='text-center'>
                                <button className='btn btn-danger me-3'>Remove Account</button>
                                <button className='btn btn-success '>Edit Account</button>
                            </div>        
                        </div>
                    </div>
                </div>
        </div>
        <h1 className='text-center'>ADD AN ACCOUNT</h1>
        <div className='container-sm'>
            <form>
            <div className='row'>
                    <div className='col-3'></div>
                    <div className="m-3 col-6">
                    <label for="exampleName" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleName"  onChange={handleName}/>
                    <div id="emailHelp" className="form-text">Make sure the name above matches with the name on the card.</div>
                </div>
            </div>
            <div className='row'>
                    <div className ="col-3"></div>
                    <div className="m-3 col-6">
                        <label for="exampleInputPassword1" className="form-label">Account Number</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={handleAccountNumber}/>
                    </div>
            </div>
            <div className='row'>
                    <div className ="col-3"></div>
                    <div className="m-3 col-6">
                        <label for="exampleInputPassword1" className="form-label">Card Number</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" onChange={handleCardNumber}/>
                    </div>
            </div>
            <div className='text-center m-3'>
                <button className="btn btn-primary" onClick= {addAccount}>Add</button>
            </div>

            </form>
        </div>

        <NotificationContainer/>
    </div>
  )
}

export default index