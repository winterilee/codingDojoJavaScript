import React, {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateOne = (props) => {
    
    const {id} = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {setSelectedProduct(res.data)})
            .catch((err) => {console.log(err)})
    }, []);

    const targetHandler = e => {
        e.preventDefault();
        setSelectedProduct({...selectedProduct, [e.target.name]: e.target.value})
    };

    const updateProductHandler = e => {
        e.preventDefault();
        const editProduct = {
            title: selectedProduct.title,
            price: selectedProduct.price,
            description: selectedProduct.description
        }
        axios.patch(`http://localhost:8000/api/products/${id}`, editProduct)
            .then(res => {console.log(res); navigate(`/products/${id}`)})
            .catch(err => console.log(err))
    }
    
    return(
        <div>
            <form onSubmit={updateProductHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" value={selectedProduct.title} name="title" onChange={targetHandler}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text" value={selectedProduct.price} name="price" onChange={targetHandler}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text" value={selectedProduct.description} name="description" onChange={targetHandler}/>
                </div>
                <button style={{backgroundColor: "lightgrey", margin: "10px"}}>Edit</button>
                <div>
                <Link to={`/products/${id}`}>Back</Link>
                </div>
            </form>
        </div>
    );
}

export default UpdateOne;