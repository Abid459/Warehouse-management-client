import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAllproducts from '../../hooks/useAllproducts';
import AddItem from '../AddItem/AddItem';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import InventoryOptions from './InventoryOptions';

const Inventory = () => {
    const [products, setPtoducts] = useAllproducts([]);
    // useEffect(() => {
    //     const loadProducts = async () => {
    //         // const { data } = await axios('/products.json');
    //         const { data } = await axios('http://localhost:5000/products');
    //         setPtoducts(data);
    //         console.log(data);
    //     }
    //     loadProducts()
    // }, [])

    const [modalShow, setModalShow] = React.useState(false);// using byreact bootstrap modal
    return (
        <div className='inventory'>
            <InventoryProduct products={products} setPtoducts={setPtoducts}></InventoryProduct>
            {/* {showOptions === true? <InventoryOptions></InventoryOptions>: null} */}
            <FontAwesomeIcon className='faIcon faplus' icon={faPlus} onClick={() => setModalShow(true)}></FontAwesomeIcon>
            {/* bootstrap modal---- */}
            <AddItem
            show={modalShow}
            onHide={() => setModalShow(false)}
            ></AddItem>
            {/* <InventoryOptions></InventoryOptions> */}

        </div>
    );
};

export default Inventory;