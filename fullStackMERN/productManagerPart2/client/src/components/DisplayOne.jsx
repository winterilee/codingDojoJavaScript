import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayOne = ({allProducts}) => {

    const {id} = useParams();

    const selectedProduct = allProducts.filter( product => {
        return product._id === id;
    })

    return(
        <div>
            <h4>{selectedProduct.title}</h4>
            <p>Price: $ {selectedProduct.price}</p>
            <p>Description: {selectedProduct.description}</p>
        </div>
    );
};

export default DisplayOne;