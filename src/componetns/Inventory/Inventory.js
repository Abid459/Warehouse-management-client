import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';
import useAllproducts from '../../hooks/useAllproducts';
import useRefreshProduct from '../../hooks/useRefreshProduct';
import AddItem from '../AddItem/AddItem';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import Loading from '../Loading/Loading';
import InventoryOptions from './InventoryOptions';

const Inventory = () => {
    const {products,setPtoducts,refreshProduct,setRefreshProduct,isLoading,error} = useRefreshProduct('products')
    const [user] = useAuthState(auth)

    const noUser = () =>{
        
        toast.error('Please sign in to make changes.', {
            style: {
                border: '1px solid orange',
                padding: '16px',
                color: 'black',
            },
            iconTheme: {
                primary: 'black',
                secondary: '#FFFAEE',
            },
        });
    }
    const [modalShow, setModalShow] = React.useState(false);// using byreact bootstrap modal
    return (
        <div className='inventory'>
            {isLoading && <Loading></Loading>}
            <h5 className='text-center mb-4'>MANAGE <span className='text-muted'>INVENTORY</span></h5>
            {/* {error && <h3>{error}</h3> } */}
            <InventoryProduct refreshProduct={refreshProduct} setRefreshProduct={setRefreshProduct} products={products} setPtoducts={setPtoducts}></InventoryProduct>
            
            {/* {showOptions === true? <InventoryOptions></InventoryOptions>: null} */}
            
            {/* bootstrap modal---- */}
            {
                user ?<FontAwesomeIcon className='faIcon faplus' icon={faPlus} onClick={() => setModalShow(true)}></FontAwesomeIcon>: <FontAwesomeIcon className='faIcon faplus' icon={faPlus} onClick={noUser}></FontAwesomeIcon>
            }
             <AddItem refreshproduct={refreshProduct} setrefreshproduct={setRefreshProduct} show={modalShow} onHide={() => setModalShow(false)}
                ></AddItem>
            {/* <InventoryOptions></InventoryOptions> */}

        </div>
    );
};

export default Inventory;