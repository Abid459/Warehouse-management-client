import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import InventoryProduct from '../InventoryProduct/InventoryProduct';

const Inventory = () => {
    const [products, setPtoducts] = useState([]);
    let count = 1;
    useEffect(() => {
        const loadProducts = async () => {
            const { data } = await axios('/products.json');
            setPtoducts(data);
            console.log(data);
        }
        loadProducts()
    }, [])



    return (
        <div className='inventory'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cover Picture</th>
                        <th>Name</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th colSpan={2} className='text-center'>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product => {
                            const  name = product.name;
                            const newName = name.length >= 30 ? name.slice(0,30) + '...' :name;
                          return  <tr>
                                <td>{count ++}</td>
                                <td className='text-center'> <img src={product.image} alt="" /> </td>
                                <td>{newName}</td>
                                <td>{product.author}</td>
                                <td className='text-center'>{product.price}</td>
                                <td className='text-center'><button>Update</button></td>
                                <td className='text-center'><button>delete</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default Inventory;