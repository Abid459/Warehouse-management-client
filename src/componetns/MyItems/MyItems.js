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

// useEffect(()=>{
    
// },[])
    // if(user &&  !isNavigate){
    //     navigate('/temp')
    //     setIsnavigate(true);
    // }
    // user && navigate('/temp');
    // console.dir('refresh error', error)
    const noProduct = <div className='no-products'>
        <div>
        <h4>No Products Found</h4>
        <p>Tyr adding Products from manage inventory page(click the Plus icon)</p>
        </div>
    </div>
    return (

        <div className='my-items'>
            <h5 className='text-center'>MY <span className='text-muted'> ITEMS</span></h5>
            {loading && <Loading></Loading>}
            {
                products.length === 0 ? noProduct :<InventoryProduct products={products} setRefreshProduct={setRefreshProduct} refreshProduct={refreshProduct} setPtoducts={setPtoducts}></InventoryProduct>
            }
            
        </div>

    );
};

export default MyItems;