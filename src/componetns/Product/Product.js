import axios from 'axios';
// import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Product = (props) => {
    const product = props.product;
    const [supplierUpdate, setSupplierUpdate] = useState(false);
    const [quantity, setQuantity] = useState(0)
    const [sold, setSold] = useState(props.product.sold)
    useEffect(() => {
        setQuantity(product.quantity)
        setSold(product.sold)
    }, [product])
    const handleDeliver = async () => {
        setQuantity(quantity - 1)
        setSold(sold + 1);
        axios.put(`http://localhost:5000/productQuantitty/${product._id}`, { quantity:quantity-1, sold:sold+1 })
        .then(res=>console.log(res))
        
        // console.log(data)
    }
    // useEffect(()=>{
    // },[sold,quantity])

    const handleSupplierUpdate = e => {
        const SupplierUpdateBtn = document.querySelector('.switch');
        const supplierField = document.querySelectorAll('.edit-input-field');
        console.log(supplierField);
        if (!supplierUpdate) {
            SupplierUpdateBtn.style.transition = '4s';
            SupplierUpdateBtn.style.right = '0px';
            SupplierUpdateBtn.style.left = 'auto';
            supplierField.forEach(x => {
                x.style.background = '#DBDBDB';
                x.style.borderRadius = '6px';
                x.removeAttribute("readonly");
            })
            console.log('first is hitting')
            // setSupplierUpdate(true)
        } else if (supplierUpdate) {
            SupplierUpdateBtn.style.right = 'auto';
            SupplierUpdateBtn.style.left = '0px';
            supplierField.forEach(x => {
                x.style.background = '#0000';
                x.setAttribute("readonly", "true");
            })
            console.log('last is hitting')
        }
        setSupplierUpdate(!supplierUpdate);
    }

    return (
        <div>


            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update the product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='product'>
                        <div className="product-wrapper">
                            <img src={product?.image} alt="" />
                            <div >
                                <div className='d-flex justify-content-between'>
                                    <div className="info">
                                        <h5>{product?.name}</h5>
                                        <p><i>by {product?.author}</i></p>
                                    </div>
                                    <div onClick={handleSupplierUpdate} className='toggle-switch'>
                                        <div className='switch'>

                                        </div>
                                    </div>
                                </div>
                                <div className='hr'></div>
                                <div className="selling-info">
                                    <div className="quantity">
                                        <p>Quantity:</p>
                                        <p>{quantity}</p>
                                    </div>
                                    <div className="sold">
                                        <p>Sold:</p>
                                        <p>{sold}</p>
                                    </div>
                                    <div className="buying-price text-center">
                                        <p>Buying Price: </p>
                                        <input className='text-center edit-input-field' type="text" defaultValue={'$' + product?.price} readOnly />
                                    </div>
                                    <div>
                                        <p>Selling Price: </p>
                                        <input type="text" className='text-center edit-input-field' defaultValue={'$' + product?.price} name="" id="" readOnly />
                                    </div>
                                    <button onClick={handleDeliver}>DELIVERED</button>
                                </div>
                                <div className="supplier">
                                    <p className='p-2'>Supplier:</p>
                                    <div className='p-2'>
                                        <div>
                                            <b> Name:</b> <input type="text" className='edit-input-field' defaultValue={product?.supplier?.name} readOnly name="" id="" />
                                        </div>


                                        <div>
                                            <b> Email:</b> <input type="email" className='edit-input-field' defaultValue={product?.supplier?.email} name="email" readOnly />
                                            <b> Phone:</b> <input type="text" className='edit-input-field' defaultValue={product?.supplier?.phone} name="" readOnly />
                                        </div>
                                    </div>
                                </div>

                                <div className='restock-item'>
                                    <p className='mb-3 p-2'>Restock the item</p>
                                    <div className='d-flex justify-content-between p-2'>
                                        <input type="number" className='w-50' name="restock" placeholder='Enter the amount' />
                                        <span className='text-white'>total cost: $300</span>
                                        <button>Restock</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="description">
                            <h4>About the Book</h4>
                            <p>{product?.description?.length >= 200 ? product?.description.slice(0, 200) + ' ... See Mroe' : product?.description}</p>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


//   render(<App />);

export default Product;