import axios from 'axios';
import { useEffect, useState } from 'react';

const useRefreshProduct = (props) => {
    console.log('hooks',props)
    const [refreshProduct, setRefreshProduct] = useState(false);
    const [products, setPtoducts] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            console.log('inside refresh')
            const { data } = await axios(`http://localhost:5000/${props}`);
            setPtoducts(data);
        }
        loadProducts()
    }, [refreshProduct])
    return {products,setPtoducts,refreshProduct, setRefreshProduct}
};

export default useRefreshProduct;