import React from 'react';
import './Dashnoard.css'

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <div className='stock-info d-flex justify-content-around py-2'>
                <div>
                    <p>Current Stock</p>
                    <p className='text-center'>120</p>
                </div>
                <div>
                    <p>Stock Value</p>
                    <p className='text-center'>$900</p>
                </div>
            </div>

            <div className='dashboard-info'>
                <div>
                    <p>Low Stock</p>
                    <p>12</p>
                    <button>Manage</button>
                </div>
                <div>
                    <p>Transactions</p>
                    <p>Sell:$3000</p>
                    <p>Capital:$2000</p>
                    <p>Revenew:$1000</p>
                </div>
            </div>
            <div className="inventory-product">
                <p>Those are inventory product</p>
            </div>
            
        </div>
    );
};

export default Dashboard;