import React from 'react';
import {Routes, Route} from "react-router-dom";
import FormAndDisplayAll from "../components/FormAndDisplayAll";
import DisplayOne from '../components/DisplayOne';
import UpdateOne from '../components/UpdateOne';

const Main = (props) => {
    return(
        <Routes>
            <Route path={"/"} element={<FormAndDisplayAll/>} />
            <Route path={"/:id"} element={<DisplayOne/>}/>
            <Route path={"/update/:id"} element={<UpdateOne/>}/>
        </Routes>
    );
};

export default Main;