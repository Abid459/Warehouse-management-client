import { render } from '@testing-library/react';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, Stack } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';






const AddItem = (props) => {
  const [response, setResponse] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const [imageUrl, setImageUrl] = useState('')
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

    const newProduct = { name, author, image, description, quantity, price, sold, sellingPrice, userEmail, supplier }
    await axios.post('https://shrouded-refuge-18359.herokuapp.com/product', newProduct)
      .then(res => {
        if (res.data.insertedId) {
          setResponse('item added')
          props.setrefreshproduct(!props.refreshproduct)
          e.target.reset()
        }
      })
      .catch(err => setResponse(err))
  }


  setTimeout(() => {
    setResponse('')
  }, 4000)
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
        <Modal.Body className='inputItem-container  w-100'>
          <div className=''>


            <div className='img-container'>
              {imageUrl && <img src={imageUrl} alt="" />}
            </div>

            <form onSubmit={handleAddItem} className='mx-auto'>
              <div className='add-item'>
                <input className='inp-book' type="text" name="name" placeholder='Name of book' />
                <input className='inp-author' type="text" name="author" placeholder='Author of the book' />
                <input type="number" name='buyimgPrice' placeholder='Buying Price of per unit boook' />
                <input type="number" name='sellingPrice' placeholder='Selling Price of per unit boook' />
                <input type="text" onBlur={(e) => setImageUrl(e.target.value)} name="image" placeholder='Image url' />
                <input type="number" name="quantity" placeholder='Quantity' />


              </div>
              <div className='d-flex'>
                <textarea className='mx-auto' name="description" id="" cols="30" rows="3" placeholder='Write about your book'></textarea>
              </div>
              <div className='addItem-supplier'>
                <div className='mx-auto'>
                  <p>Supplier:</p>
                  <input type="text" name="sName" placeholder='Supplier Name' />
                  <input type="email" name="sEmail" placeholder='Supplier email' />
                  <input type="number" name="sPhonNo" placeholder='Supplier phone no' />
                </div>
              </div>

              <hr />
              <div className='d-flex justify-content-end'>
                <p className='text-primary me-5'>{response}</p>
                <button type='reset'>RESET</button>
                <button type='submit'>ADD</button>
              </div>

            </form>
          </div>
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