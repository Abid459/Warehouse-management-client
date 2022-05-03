import React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div>

            <div className="container">
                <p>Quick OverView</p>
                <Dashboard></Dashboard>
            </div>
        </div>
    );
};

export default Home;