import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAllproducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            // const { data } = await axios('/products.json');
            const { data } = await axios('https://shrouded-refuge-18359.herokuapp.com/products');
            setProducts(data);
            console.log(data);
        }
        loadProducts()
    }, [])
    return [products,setProducts]
};

export default useAllproducts;