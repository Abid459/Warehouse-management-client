
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Product from '../Product/Product';
import RequireAuth from '../RequireAuth/RequireAuth';
// import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import './InventoryProduct.css'
import toast from 'react-hot-toast';


const InventoryProduct = ({refreshProduct,setRefreshProduct,products,setPtoducts}) => {
    
    
    const [modalShow, setModalShow] = React.useState(false);
    const [curentProduct,setCurentProduct]= useState({});
    // const [user, loading, error] = useAuthState(auth);
    const [user,loading] = useAuthState(auth)
    const navigate = useNavigate();
    const location =useLocation();
    
    const handleDelete = async(id) =>{
        const isSure = window.confirm('Are you sure?')
        if(isSure){
             axios.delete(`https://shrouded-refuge-18359.herokuapp.com/product/${id}`)
            .then(data=>{
                setPtoducts(products.filter(product=>product._id !== id))
            })
        }
    }

   
    const handleEdit = product =>{
        setModalShow(true)
        setCurentProduct(product)
    }

    const noUser = () =>{
        
        toast.error('Please sign in to make changes.', {
            style: {
                border: '1px solid orange',
                padding: '16px',
                color: 'black',
            },
            iconTheme: {
                primary: 'black',
                secondary: '#FFFAEE',
            },
        });
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
                        {
                            user ? <div className='options'>
                            <button onClick={()=>handleDelete(product._id)} >Delete</button>
                            <button onClick={()=>handleEdit(product)}>Update</button> </div>: <div className='options'>
                            <button onClick={noUser} >Delete</button>
                            <button onClick={noUser}>Update</button> </div>
                        
                        }
                        



                    
        </div>
                })
            }

                <Product
                refreshproduct = {refreshProduct}
                setrefreshproduct={setRefreshProduct}
                product={curentProduct}
                show={modalShow}
                onHide={() => setModalShow(false)}
                ></Product>
                </div>
    );
};

export default InventoryProduct;