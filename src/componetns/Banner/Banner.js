import React from 'react';
import './Banner.css'

const Banner = () => {
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"]
    const monthIndex = new Date().getMonth();
    const month = months[monthIndex]
    console.log("This is date",month)
    return (
        <div className='banner'>
            <div className="banner-container">
                <p>Your solution to the stock all kinds of stock management</p>
                <h4> 40% discount on {month}</h4>
                <h6>Its a imited time offer. Hurry up and scale up ypur business</h6>
                <div className=''>

                    <button>Show Packages</button>
                </div>
            </div>

        </div>
    );
};

export default Banner;