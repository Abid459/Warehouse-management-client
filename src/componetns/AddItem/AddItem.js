import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, Stack } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';






const AddItem = (props) => {
  const [response,setResponse] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [imageUrl,setImageUrl] = useState('')
  // const [modalShow, setModalShow] = React.useState(false);
  const handleAddItem = async e => {
    e.preventDefault();
    const name = e.target.name.value;
    const author = e.target.author.value;
  
    const image = e.target.image.value || 'https://i.ibb.co/d5nxzwC/book.png';
    const description = e.target.description.value;
    const quantity = e.target.quantity.value || 0;
    // const quantity = e.target.quantity.value
  
    const price = e.target.buyimgPrice.value || 0;
    const sellingPrice = e.target.sellingPrice.value || 0;

    const userEmail = user?.email;
    const sold = 0;
  
    const supplier = {
      name: e.target.sName.value,
      email: e.target.sEmail.value,
      phone: e.target.sPhonNo.value
    }
    console.log(name, author, image, description, quantity, price, sellingPrice, supplier)
    const newProduct = { name, author, image, description, quantity, price,sold, sellingPrice,userEmail, supplier }
    await axios.post('http://localhost:5000/product', newProduct )
      .then(res => {
        if(res.data.insertedId){
          setResponse('item added')
          props.setrefreshproduct(!props.refreshproduct)
          e.target.reset()
        }
      })
      .catch(err=>setResponse(err))
    console.log()
  }


  setTimeout(()=>{
          setResponse('')
  },4000)
  return (
    <div>


      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ADD ITEM
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex add-item w-100'>
          {/* <h4>Centered Modal</h4> */}
          <div className='img-container'>
              {imageUrl && <img src={imageUrl} alt="" />}
          </div>

          <form onSubmit={handleAddItem} className='mx-auto'>
            <Stack gap={2} direction="horizontal" className='mb-3'>

              <input className='w-50 ' type="text" name="name" placeholder='Name of book' />
              <input className='w-50' type="text" name="author" placeholder='Author of the book' />
            </Stack>

            <div className='d-flex'>
              <div>
                <Stack gap={2} direction="horizontal" className='mb-3'>
                  <input type="number" name='buyimgPrice' placeholder='Buying Price of per unit boook' />
                  <input type="number" name='sellingPrice' placeholder='Selling Price of per unit boook' />
                </Stack>
                <Stack gap={2} direction="horizontal" className='mb-3'>
                  <input type="text" onBlur={(e)=>setImageUrl(e.target.value)} name="image" placeholder='Image url' />
                  <input type="number" name="quantity" placeholder='Quantity' />
                </Stack>
              </div>
              <div className='ms-2'>
                <textarea name="description" id="" cols="24" rows="4" placeholder='Write about your book'></textarea>

              </div>
            </div>
            <p>Supplier:</p>
            <Stack gap={2} direction="horizontal" className='mb-3'>
              <input type="text" name="sName" placeholder='Supplier Name' />
              <input type="email" name="sEmail" placeholder='Supplier email' />
              <input type="number" name="sPhonNo" placeholder='Supplier phone no' />
            </Stack>
            <hr />
            <Stack gap={2} direction="horizontal" className='mb-3'>
              <button type='reset'>RESET</button>
              <button type='submit'>ADD</button>
              <p className='text-primary ms-5'>{response}</p>
            </Stack>

          </form>

        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>






      {/* <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </> */}










    </div>
  );
};
// render(<AddItem />);

export default AddItem;