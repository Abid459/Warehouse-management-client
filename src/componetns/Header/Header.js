import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Inventory from '../Inventory/Inventory';
import NotFound from '../NotFound/NotFound';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <header>
            <TopHeader></TopHeader>
            <nav>
            <Link to={'/'}>Home</Link>
            <Link to={'/inventory'}>Inventory</Link>
            </nav>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/inventory' element={<Inventory></Inventory>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </header>
    );
};

export default Header;