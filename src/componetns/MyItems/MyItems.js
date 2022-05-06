import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useRefreshProduct from '../../hooks/useRefreshProduct';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import Loading from '../Loading/Loading';
import LoadingSpinner from '../Loading/Loading';

const MyItems = () => {
    const navigate = useNavigate('')
    const [isNavigate,setIsnavigate] = useState(false)
    const [user, loading, error2] = useAuthState(auth);
    const [userEmail, setUserEmail] = useState(user?.email);
    const { products, setPtoducts, refreshProduct, setRefreshProduct, isLoading, error } = useRefreshProduct(`products/myProducts/${userEmail}`)


    if(user &&  !isNavigate){
        navigate('/temp')
        setIsnavigate(true);
    }
    // user && navigate('/temp');
    console.dir('refresh error', error)
    console.log("this is from my products", products)
    return (

        <div className='my-items'>
            <p>This is my item</p>
            {loading && <Loading></Loading>}
            <InventoryProduct products={products} setRefreshProduct={setRefreshProduct} refreshProduct={refreshProduct}></InventoryProduct>
        </div>

    );
};

export default MyItems;