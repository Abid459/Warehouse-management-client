import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useLowstock = () => {
    const [lowStock,setLowStock] = useState([])
    useEffect(()=>{

        const lowStock = async () =>{
            const {data} =await axios ('https://shrouded-refuge-18359.herokuapp.com/lowStock')
            setLowStock(data)
        }
        lowStock();
    },[])
    return [lowStock,setLowStock]
};

export default useLowstock;