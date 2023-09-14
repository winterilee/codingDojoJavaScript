import React from 'react';

const ProductForm = (props) => {
    return(
        <div>
            <h2>Product Manager</h2>
            <form>
                <div>
                    <label>Title</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Price</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Description</label>
                    <input type="text"/>
                </div>
                <button style={{backgroundColor: "lightgrey", margin: "10px"}}>Create</button>
            </form>
        </div>
    );
}

export default ProductForm;