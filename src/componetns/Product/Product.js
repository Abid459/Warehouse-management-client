import axios from 'axios';
// import { Modal } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Product = (props) => {
    // console.log('props', props)
    const product = props.product;
    const [supplierUpdate, setSupplierUpdate] = useState(false);
    const [quantity, setQuantity] = useState(0)
    const [sold, setSold] = useState(props?.product?.sold)
    const sellPrice = props?.product.price + (props.product.price * 0.2)
    useEffect(() => {
        setQuantity(product.quantity)
        setSold(product.sold)
    }, [product])

    const handleDeliver = async () => {
        await axios.put(`https://shrouded-refuge-18359.herokuapp.com/productQuantitty/${product._id}`, { quantity: quantity - 1, sold: sold + 1 })
            .then(res => {
                if (res.data.modifiedCount >= 1) {
                    setQuantity(quantity - 1)
                    setSold(sold + 1);
                    props?.setrefreshproduct(!props.refreshproduct)
                }
            })
    }



    const handleUpdateInfo = () => {
        const SupplierUpdateBtn = document.querySelector('.switch');
        const supplierField = document.querySelectorAll('.edit-input-field');
        // console.log(supplierField);
        if (!supplierUpdate) {
            SupplierUpdateBtn.style.transition = '4s';
            SupplierUpdateBtn.style.right = '0px';
            SupplierUpdateBtn.style.left = 'auto';
            supplierField.forEach(x => {
                x.style.background = '#DBDBDB';
                x.style.borderRadius = '6px';
                x.removeAttribute("readonly");
            })

            // setSupplierUpdate(true)
        } else if (supplierUpdate) {
            SupplierUpdateBtn.style.right = 'auto';
            SupplierUpdateBtn.style.left = '0px';
            supplierField.forEach(x => {
                x.style.background = '#0000';
                const buyingPrice = parseInt(document.querySelector('.price').value.slice(1));
                const sellingPrice = parseInt(document.querySelector('.sell-price').value.slice(1));
                const supplierName = document.querySelector('.s-name').value;
                const supplierEmail = document.querySelector('.s-email').value;
                const supplierPhone = document.querySelector('.s-phone').value;
                // const updateInfo = { buyingPrice, sellingPrice, supplierName, supplierEmail, supplierPhone };
                const update = async () => {
                    await axios.put(`https://shrouded-refuge-18359.herokuapp.com/updateInfo/${product._id}`, { buyingPrice, sellingPrice, supplierName, supplierEmail, supplierPhone })
                        .then(res => {
                            // console.log(res)
                            props?.setrefreshproduct(!props.refreshproduct)
                        })
                }
                update();
                x.setAttribute("readonly", "true");

            })
        }
        setSupplierUpdate(!supplierUpdate);
    }

    const handleRestock = async () => {
        const restock = document.querySelector('.restock').value;
        await axios.put(`https://shrouded-refuge-18359.herokuapp.com/productRestock/${product._id}`, { quantity: parseInt(quantity) + parseInt(restock) })
            .then(res => {
                if (res.data.modifiedCount >= 1) {
                    setQuantity(parseInt(quantity) + parseInt(restock))
                    props?.setrefreshproduct(!props.refreshproduct)
                }
            })

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
                            <div >
                                <div className='d-flex'>
                                    <div className='d-flex justify-content-between'>
                                        <img src={product?.image} alt="" />
                                        <div className="info">
                                            <h5>{product?.name}</h5>
                                            <p><i>by {product?.author}</i></p>
                                        </div>
                                    </div>
                                    <div onClick={handleUpdateInfo} className='toggle-switch '>
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
                                        <input className='text-center edit-input-field price' type="text" defaultValue={'$' + product?.price} name="price" readOnly />
                                    </div>
                                    <div>
                                        <p>Selling Price: </p>
                                        <input type="text" className='text-center sell-price edit-input-field' defaultValue={'$' + product.sellingPrice || sellPrice} name="" id="" readOnly />
                                    </div>
                                    <button onClick={handleDeliver}>DELIVERED</button>
                                </div>
                                <div className="supplier">
                                    <p className='p-2'>Supplier:</p>
                                    <div className='p-2'>
                                        <div>
                                            <b> Name:</b> <input type="text" className='edit-input-field s-name' defaultValue={product?.supplier?.name} readOnly name="" id="" />
                                        </div>


                                        <div>
                                            <b> Email:</b> <input type="email" className='edit-input-field s-email' defaultValue={product?.supplier?.email} name="email" readOnly />
                                            <b> Phone:</b> <input type="text" className='edit-input-field s-phone' defaultValue={product?.supplier?.phone} name="" readOnly />
                                        </div>
                                    </div>
                                </div>

                                <div className='restock-item'>
                                    <p className='mb-3 p-2'>Restock the item</p>
                                    <div className='d-flex justify-content-between p-2'>
                                        <input type="number" className='w-50 restock' name="restock" placeholder='Enter the amount' />
                                        <span className='text-white'>total cost: $300</span>
                                        <button onClick={handleRestock}>Restock</button>
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

export default Product;