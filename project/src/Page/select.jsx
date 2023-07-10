import oracledb from '/Users/smhrd/Desktop/mainproject/Ailing-LeeJunok/config/oracleDatabase';

import React, { useState, useEffect } from 'react';
import oracledb from '/Users/smhrd/Desktop/mainproject/Ailing-LeeJunok/config/oracleDatabase';

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/product');
            const yamlData = await response.text();
            const data = yaml.safeLoad(yamlData);
            setProducts(data.products);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        <img src={product.prod_img}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
