import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';

const FormAndDisplayAll = ({allProducts, setAllProducts}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const newProductHandler = e => {
        e.preventDefault();
        const newProduct = {
            title: title,
            price: price,
            description: description
        }
        axios.post("http://localhost:8000/api/products", newProduct)
            .then(res => {
                setAllProducts([...allProducts, res.data]);
                navigate("/products")
            })
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
                        <Link key={product._id} to={`/products/${product._id}`}>{product.title}</Link>
                    )
                })
            }

        </div>
    );
};

export default FormAndDisplayAll;