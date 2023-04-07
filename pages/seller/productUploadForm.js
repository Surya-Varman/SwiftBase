import React from 'react';
import axios from 'axios';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';

function ProductUploadForm() {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [image, setImage] = React.useState('');
  function handleSubmit(){
      let unique_id = ""
      for (let i = 0; i < 128; i++) {
        unique_id += String(Math.floor(Math.random() * 10));
      }
      axios.post('/api/products/addProduct', { unique_id,name,price,description,category,image} ).then(function(response){console.log("Successfully added product")}).catch(function(error){"There is a error in adding a product"});

      axios.get('/api/users/getUserId').then(function(response){
        console.log(response.data)
        
      }).catch(function(error){console.log("There is a error in getting user")});
      
  }
  function handleName(e){
    setName(e.target.value);
  }
  function handlePrice(e){
    setPrice(e.target.value);
  }
  function handleDesc(e){
    setDescription(e.target.value);
  }
  function handleCategory(e){
    setCategory(e.target.value);
  }
  function handleImage(e){
    setImage(e.target.value);
  }
  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center'>
        <MDBCol lg='9' className='my-5'>

          <h1 class="text-black mb-4">Upload Product</h1>

          <MDBCard>
            <MDBCardBody className='px-4'>

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Name</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput  size='lg' id='form1' type='text' onChange={handleName}/>
                </MDBCol>
              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Price</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='price in rupees' size='lg' id='form2' onChange={handlePrice}/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Description</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                  <MDBTextArea label='Message' id='textAreaExample' rows={3} onChange={handleDesc}/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Select category</h6>
                </MDBCol>

                <MDBCol md='9' className='pe-5'>
                
                  <div className='form-group'>
                    <select className='form-control' id='fileType' onChange={handleCategory}>
                      <option value='groceries'>Groceries</option>
                      <option value='tech'>Tech</option>
                      <option value='fashion'>Fashion</option>
                    </select>
                  </div>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />
              <MDBRow className='align-items-center pt-4 pb-3'>

                <MDBCol md='3' className='ps-5'>
                  <h6 className="mb-0">Upload Image</h6>
                </MDBCol>
              
                <MDBCol md='9' className='pe-5'>
                  <MDBInput label='upload a link to the image' size='lg' id='form2' onChange={handleImage}/>
                </MDBCol>

              </MDBRow>

              <hr className="mx-n3" />

              <MDBBtn className='my-4' size='lg' onClick={handleSubmit}>Submit</MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default ProductUploadForm;