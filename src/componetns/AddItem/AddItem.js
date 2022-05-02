import { render } from '@testing-library/react';
import React from 'react';
import { Button, Modal, Stack } from 'react-bootstrap';



const handleAddItem = e => {
  e.preventDefault();
}


const AddItem = (props) => {
  // const [modalShow, setModalShow] = React.useState(false);
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
        <Modal.Body className='d-flex add-item'>
          {/* <h4>Centered Modal</h4> */}
          <div className='img-container'>

          </div>

          <form onSubmit={handleAddItem} className = 'mx-auto'>
            <Stack gap ={2} direction="horizontal" className='mb-3'>

              <input className='w-50 ' type="text" name="name" placeholder='Name of book' />
              <input className='w-50' type="text" name="author" placeholder='Author of the book' />
            </Stack>

            <Stack gap ={2} direction="horizontal" className='mb-3'>
              <input type="number" name='buyimgPrice' placeholder='Buying Price of per unit boook' />
              <input type="number" name='sellingPrice' placeholder='Selling Price of per unit boook' />
            </Stack>
            <Stack gap ={2} direction="horizontal" className='mb-3'>
            <input type="text" name="image" placeholder='Image url' />
            <input type="number" name="quantity" placeholder='Amount of the books' />
            </Stack>
            <hr />
            <Stack gap ={2} direction="horizontal" className='mb-3'>
              <button type='reset'>RESET</button>
              <button type='submit'>ADD</button>
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