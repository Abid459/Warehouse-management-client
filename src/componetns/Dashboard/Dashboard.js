import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashnoard.css'
import useAllproducts from '../../hooks/useAllproducts';
import { Link, useNavigate } from 'react-router-dom';
import useLowstock from '../../hooks/useLowstock';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import useRefreshProduct from '../../hooks/useRefreshProduct';
import Loading from '../Loading/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    const [count,setCount] = useState(0);
    const [price,setPrice] = useState()
    const [lowStock,setLowstock] = useLowstock([]);
    const navigate = useNavigate();
    const {products,refreshProduct,setRefreshProduct,isLoading,error} = useRefreshProduct('productsSix')

    useEffect(()=>{
        const counProducts = async () => {
            const {data} = await axios ('http://localhost:5000/countProducts');
            setCount(data.count);
        }
        counProducts();

        const totalPrice = async () =>{
            const {data} = await axios ('http://localhost:5000/allPrice')
            let sum = 0;
            data.forEach(x => {
                sum = sum+x;
            });
            setPrice(sum);
        }
        totalPrice();

        

    },[]);




 

    return (
        <div className='dashboard'>
            <div className='stock-info d-flex justify-content-around py-2'>
                <div>
                    <h5>Current Stock</h5>
                    <p className='text-center'>{count}</p>
                </div>
                <div className='vr'></div>
                <div>
                    <h5>Stock Value</h5>
                    <p className='text-center'>${price}</p>
                </div>
            </div>

            <div className='dashboard-info'>
                <div className='low-stock'>
                    <h5>Low Stock</h5>
                    <p>{lowStock.length}</p>
                    <button onClick={()=>navigate('/lowStock',lowStock)}>Manage</button>
                </div>
                <div className='transection'>
                    <h5>Transactions</h5>
                    <div className="transection-info">
                    <p> Sell: <i>$ 3000 </i></p>
                    <p>Capital: <i> $2000 </i> </p>
                    <p>Revenew: <i> $1000 </i></p>
                    </div>
                </div>
            </div>
            <div className="inventory-products">
                {isLoading && <Loading></Loading>}
                {/* {error && <h3>{error}</h3> } */}
                <h5>Inventory Products</h5>
                <div><InventoryProduct products={products} refreshProduct={refreshProduct} setRefreshProduct={setRefreshProduct}></InventoryProduct>
                    {/* <Loading></Loading> */}
                    <div className='w-100 text-end p-3 ' role="button" onClick={()=>navigate('/inventory')}>
                    <p> Show all products</p>
                    <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;