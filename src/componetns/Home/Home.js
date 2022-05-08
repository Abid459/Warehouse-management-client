import React from 'react';
import Banner from '../Banner/Banner';
import Dashboard from '../Dashboard/Dashboard';
import Footer from '../Footer/Footer';
import Product from '../Product/Product';

const Home = () => {
    return (
        <div className='home'>

            <div className="container">
                <Banner></Banner>
                <Dashboard></Dashboard>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;