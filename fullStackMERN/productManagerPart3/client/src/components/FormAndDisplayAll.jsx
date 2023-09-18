import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const FormAndDisplayAll = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const newProductHandler = e => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {setAllProducts([...allProducts, res.data])})
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={newProductHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <button style={{backgroundColor: "lightgrey", margin: "10px"}}>Create</button>
            </form>
            <h3>All Products:</h3>
            {
                allProducts.map( product => {
                    return(
                        <div key={product._id}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default FormAndDisplayAll;