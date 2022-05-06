import axios from 'axios';
import { useEffect, useState } from 'react';

const useRefreshProduct = (props) => {
    const [isLoading,setIsLoading ] = useState(false);
    const [error,setErr] = useState('')
    console.log('hooks',props)
    const [refreshProduct, setRefreshProduct] = useState(false);
    const [products, setPtoducts] = useState([]);
    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true)
            console.log('inside refresh')
            await axios(`http://localhost:5000/${props}`)
            
            .then(data=>{
                setIsLoading(false)
                setPtoducts(data.data)
            })
            .catch(err=>{
                setErr(err)
                setIsLoading(false)}
                )
        }
        loadProducts()
    }, [refreshProduct])
    return {isLoading,products,setPtoducts,refreshProduct, setRefreshProduct,error}
};

export default useRefreshProduct;