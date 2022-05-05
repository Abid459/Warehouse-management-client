
import axios from 'axios';
import React, { useState } from 'react';
import Product from '../Product/Product';

import './InventoryProduct.css'


const InventoryProduct = ({ products,setPtoducts}) => {
    // const [showOptions, setShowOptions] = useState(false);
    
    // useEffect(()=>{
    // },[])
    const handleDelete = async(id) =>{
        const isSure = window.confirm('Are you sure?')
        if(isSure){
             axios.delete(`http://localhost:5000/product/${id}`)
            .then(data=>{
                setPtoducts(products.filter(product=>product._id !== id))
                console.log(data)
            })
            
            
            // console.log(data)
        }
    }

    const [modalShow, setModalShow] = React.useState(false);
    const [curentProduct,setCurentProduct]= useState({});

    const handleEdit = product =>{
        setModalShow(true)
        setCurentProduct(product)
    }

    return (
        <div className='inventory-product px-5 py-3'>

            {
                products.map(product => {
                    const name = product.name;
                    const newName = name?.length >= 30 ? name.slice(0, 30) + '...' : name;
                    return <div
                        key={product._id}
                        className='single-inventory-item border rounded mb-2'>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div>
                            <p >{newName}</p>
                        </div>
                        <div>
                            <p className='text-muted p-author'><i> by- {product.author}</i></p>
                        </div>
                        <div className='text-center'>
                            <p>Price</p>
                            <p >{product.price}</p>
                        </div>
                        <div className='text-center'>
                            <p>Quantity</p>
                            <p>{product?.quantity}</p>
                        </div>
                        <div className='options'>
                            <button onClick={()=>handleDelete(product._id)}>DELETE</button>
                            <button onClick={()=>handleEdit(product)}>EDIT</button>
                        </div>



                    
        </div>
                })
            }

                <Product
                product={curentProduct}
                show={modalShow}
                onHide={() => setModalShow(false)}
                ></Product>
                </div>
    );
};

export default InventoryProduct;