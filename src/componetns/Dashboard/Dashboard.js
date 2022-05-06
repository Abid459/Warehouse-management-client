import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashnoard.css'
import useAllproducts from '../../hooks/useAllproducts';
import { Link, useNavigate } from 'react-router-dom';
import useLowstock from '../../hooks/useLowstock';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import useRefreshProduct from '../../hooks/useRefreshProduct';
import Loading from '../Loading/Loading';

const Dashboard = () => {
    const [count,setCount] = useState(0);
    const [price,setPrice] = useState()
    const [lowStock,setLowstock] = useLowstock([]);
    const navigate = useNavigate();
    const {products,refreshProduct,setRefreshProduct,isLoading,error} = useRefreshProduct('productsSix')

    useEffect(()=>{
        const counProducts = async () => {
            const {data} = await axios ('http://localhost:5000/countProducts');
            console.log(data);
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
                    <p>Current Stock</p>
                    <p className='text-center'>{count}</p>
                </div>
                <div>
                    <p>Stock Value</p>
                    <p className='text-center'>${price}</p>
                </div>
            </div>

            <div className='dashboard-info'>
                <div>
                    <p>Low Stock</p>
                    <p>{lowStock.length}</p>
                    <button onClick={()=>navigate('/lowStock',lowStock)}>Manage</button>
                </div>
                <div>
                    <p>Transactions</p>
                    <p>Sell:$3000</p>
                    <p>Capital:$2000</p>
                    <p>Revenew:$1000</p>
                </div>
            </div>
            <div className="inventory-product">
                {isLoading && <Loading></Loading>}
                {error && <h3>{error}</h3> }
                <p>Those are inventory product</p>
                <div><InventoryProduct products={products} refreshProduct={refreshProduct} setRefreshProduct={setRefreshProduct}></InventoryProduct>
                    {/* <Loading></Loading> */}
                    <Link to={'/inventory'}> Show all products</Link>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;