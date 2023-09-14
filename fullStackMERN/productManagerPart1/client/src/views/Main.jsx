import React from 'react';
import {Routes, Route} from "react-router-dom";
import ProductDisplay from '../components/ProductDisplay';
import ProductForm from '../components/ProductForm';

const Main = (props) => {
    return(
        <Routes>
            <Route path={"/"} element={<ProductDisplay/>} />
            <Route path={"/create"} element={<ProductForm/>}/>
        </Routes>
    );
}

export default Main;