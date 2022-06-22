import axios from 'axios';
import { signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';

const useRefreshProduct = (props) => {
    const [isLoading,setIsLoading ] = useState(false);
    const [error,setErr] = useState('')
    // console.log('hooks',props)
    const [refreshProduct, setRefreshProduct] = useState(false);
    const [products, setPtoducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const loadProducts = async () => {
            try{

                setIsLoading(true)
                await axios(`https://shrouded-refuge-18359.herokuapp.com/${props}`,{
                    headers:{
                        authorization :`Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            
            .then(data=>{
                setPtoducts(data.data)
                setIsLoading(false)
            })
        }
            catch(error){
                if(error.code === 'ERR_NETWORK'){
                    toast.error("Check Internet Connection and try Reloading")
                }else{
                    console.log('This is errro',error)
                    toast.error(error?.message)
                    console.dir(error?.response)
                }
                if(error.response.status === 403){
                    navigate('/login')
                    signOut(auth);
                }
                
                setErr(error)
                setIsLoading(false)}
                
        }
        loadProducts()
    }, [refreshProduct])
    return {isLoading,products,setPtoducts,refreshProduct, setRefreshProduct,error}
};

export default useRefreshProduct;