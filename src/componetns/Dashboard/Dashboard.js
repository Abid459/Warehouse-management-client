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
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;