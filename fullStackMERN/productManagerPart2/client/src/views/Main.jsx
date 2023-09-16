import React, {useState, useEffect} from 'react';
import {Routes, Route} from "react-router-dom";
import FormAndDisplayAll from "../components/FormAndDisplayAll";
import DisplayOne from '../components/DisplayOne';
import axios from 'axios';

const Main = (props) => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then(res => setAllProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    return(
        <Routes>
            <Route path={"/"} element={<FormAndDisplayAll allProducts={allProducts} setAllProducts={setAllProducts}/>} />
            <Route path={"/:id"} element={<DisplayOne allProducts={allProducts}/>}/>
        </Routes>
    );
};

export default Main;