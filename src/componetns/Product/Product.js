import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Product = () => {
    const [products, setPtoducts] = useState([]);
    const [supplierUpdate, setSupplierUpdate] = useState(false);
    useEffect(() => {
        const loadProducts = async () => {
            const { data } = await axios('/products.json');
            setPtoducts(data);
            console.log(data);
        }
        loadProducts()
    }, [])
    const product = products[1]
    // const{image,name,author,price,description,registered,quantity,sold} = product;
    console.log(products[1])

    const handleClickEmail = e => {
        console.log(e.target.value)
    }

    const handleSupplierUpdate = e => {
        const SupplierUpdateBtn = document.querySelector('.switch');
        const supplierField = document.querySelectorAll('.supplier-input-field');
        console.log(supplierField);
        if (!supplierUpdate) {
            SupplierUpdateBtn.style.transition = '4s';
            SupplierUpdateBtn.style.right = '0px';
            SupplierUpdateBtn.style.left = 'auto';
            supplierField.forEach(x => {
                x.style.background = 'red';
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
        <div className='product'>

            <div className="product-wrapper">
                <img src={product?.image} alt="" />
                <div>
                    <div className="info">
                        <h2>{product?.name}</h2>
                        <p><i>{product?.author}</i></p>
                    </div>
                    <hr />
                    <div className="selling-info">
                        <p>Quantity remain: {product?.quantity}</p>
                        <p>Product sold:{product?.sold}</p>
                        <button>DELIVERED</button>
                    </div>
                    <div className="supplier">
                        <div className='d-flex justify-content-between'>
                            <p>Suplier name:</p><input type="text" className='supplier-input-field' defaultValue={product?.supplier?.name} readOnly name="" id="" />
                            <div onClick={handleSupplierUpdate} className='toggle-switch'>
                                <div className='switch'>

                                </div>
                            </div>
                        </div>
                        <p>contact supplier: </p>
                        <div>
                            Email: <input type="email" className='supplier-input-field' defaultValue={product?.supplier?.email} name="email" readOnly />
                            Phone: <input type="text" className='supplier-input-field' defaultValue={product?.supplier?.phone} name="" readOnly />
                        </div>
                        <button >Update</button>
                    </div>
                    <div className='restock-item'>
                        <p>Restock the item</p>
                        <input type="number" name="restock" placeholder='Enter the amount' />
                        <button>Restock</button>
                    </div>
                </div>
            </div>
            <div className="description">
                <h3>About the Book</h3>
                <p>{product?.description}</p>
            </div>
        </div>
    );
};

export default Product;