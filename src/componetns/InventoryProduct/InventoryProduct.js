import { faBars, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InventoryOptions from '../Inventory/InventoryOptions';
import './InventoryProduct.css'


const InventoryProduct = ({ products }) => {
    // const [showOptions, setShowOptions] = useState(false);
    
    // useEffect(()=>{
    // },[])
    const handleDelete = async(id) =>{
        const isSure = window.confirm('Are you sure?')
        if(isSure){
            const {data} = axios.delete(`http://localhost:5000/product/${id}`)
            .then(res => console.log(res))
            .then(()=>window.alert('item deleted'))
            
            console.log(data)
        }
    }



    return (
        <div className='inventory-product px-5 py-3'>

            {
                products.map(product => {
                    const name = product.name;
                    const newName = name.length >= 30 ? name.slice(0, 30) + '...' : name;
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
                            <button>EDIT</button>
                        </div>



                    </div>
                })
            }

        </div>
    );
};

export default InventoryProduct;