import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LowStock from '../LowStock/LowStock';
import Home from '../Home/Home';
import Inventory from '../Inventory/Inventory';
import MyItems from '../MyItems/MyItems';
import NotFound from '../NotFound/NotFound';
import Product from '../Product/Product';
import TopHeader from './TopHeader';
import LogIn from '../LogIn/LogIn';
import Register from '../Register/Register';
import Temp from '../Temp/Temp';
import RequireAuth from '../RequireAuth/RequireAuth';
import Blogs from '../Blogs/Blogs';

const Header = () => {
    return (
        <header>
            <TopHeader></TopHeader>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/inventory' element={<Inventory></Inventory>}></Route>
                <Route path='/singleItem' element={<Product></Product>}></Route>
                {/* <Route path='myItem' element={<MyItems></MyItems>}></Route> */}
                <Route path='lowStock' element={<LowStock></LowStock>}></Route>
                <Route path='logIn' element={<LogIn></LogIn>}></Route>
                <Route path='/signUp' element={<Register></Register>}></Route>
                <Route path='/blogs' element={<Blogs></Blogs>}></Route>
                <Route path='/myProducts' element={
                    <RequireAuth>
                        <MyItems></MyItems>
                    </RequireAuth>
                }></Route>
                <Route path='/temp' element={<Temp></Temp>}></Route>
                <Route path='/*' element={<NotFound></NotFound>}></Route>
            </Routes>
        </header>
    );
};

export default Header;