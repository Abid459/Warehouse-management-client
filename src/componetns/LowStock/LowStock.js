import React from 'react';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import useLowstock from '../../hooks/useLowstock';
import useRefreshProduct from '../../hooks/useRefreshProduct';

const LowStock = () => {
    // const [lowStock,setLowstock] = useLowstock([])
    const {products,refreshProduct,setRefreshProduct} = useRefreshProduct('lowStock')
    return (
        <div className='low-stock'>
            <InventoryProduct refreshProduct={refreshProduct} setRefreshProduct={setRefreshProduct} products={products}></InventoryProduct>
        </div>
    );
};

export default LowStock;