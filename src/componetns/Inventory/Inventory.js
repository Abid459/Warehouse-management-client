import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddItem from '../AddItem/AddItem';
import InventoryProduct from '../InventoryProduct/InventoryProduct';

const Inventory = () => {
    const [products, setPtoducts] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            const { data } = await axios('/products.json');
            setPtoducts(data);
            console.log(data);
        }
        loadProducts()
    }, [])

    const [modalShow, setModalShow] = React.useState(false);// using byreact bootstrap modal

    return (
        <div className='inventory'>
            <InventoryProduct products={products}></InventoryProduct>
            <FontAwesomeIcon className='faIcon faplus' icon={faPlus} onClick={() => setModalShow(true)}></FontAwesomeIcon>
            {/* bootstrap modal---- */}
            <AddItem
            show={modalShow}
            onHide={() => setModalShow(false)}
            ></AddItem>

        </div>
    );
};

export default Inventory;