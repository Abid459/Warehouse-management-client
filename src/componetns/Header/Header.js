import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';
import Inventory from '../Inventory/Inventory';
import MyItems from '../MyItems/MyItems';
import NotFound from '../NotFound/NotFound';
import Product from '../Product/Product';
import TopHeader from './TopHeader';

const Header = () => {
    return (
        <header>
            <TopHeader></TopHeader>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/inventory' element={<Inventory></Inventory>}></Route>
                <Route path='/singleItem' element={<Product></Product>}></Route>
                <Route path='myItem' element={<MyItems></MyItems>}></Route>
                <Route path='*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </header>
    );
};

export default Header;