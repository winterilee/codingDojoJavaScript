import React, {useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DisplayOne = (props) => {

    const {id} = useParams();
    const [selectedProduct, setSelectedProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {setSelectedProduct(res.data)})
            .catch((err) => {console.log(err)})
    }, []);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {console.log(res); navigate("/products")})
            .catch((err) => console.log(err))
    };

    return(
        <div>
            <h3>{selectedProduct.title}</h3>
            <p>Price: $ {selectedProduct.price}</p>
            <p>Description: {selectedProduct.description}</p>
            <div>
                <Link to={'/products'}>Back</Link>
            </div>
            <div>
                <Link to={`/products/update/${selectedProduct._id}`}>Edit</Link>
            </div>
            <button onClick={() => deleteHandler(selectedProduct._id)} style={{backgroundColor: "tomato", margin: "10px"}}>Delete</button>
        </div>
    );
};

export default DisplayOne;