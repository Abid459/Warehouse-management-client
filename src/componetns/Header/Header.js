import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Inventory from '../Inventory/Inventory';

const Header = () => {
    return (
        <header>
            <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/inventory'}>Inventory</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/inventory' element={<Inventory></Inventory>}></Route>
            </Routes>
        </header>
    );
};

export default Header;