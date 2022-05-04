import React from 'react';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
import useLowstock from '../../hooks/useLowstock';

const LowStock = () => {
    const [lowStock,setLowstock] = useLowstock([])
    return (
        <div className='low-stock'>
            <InventoryProduct products={lowStock}></InventoryProduct>
        </div>
    );
};

export default LowStock;