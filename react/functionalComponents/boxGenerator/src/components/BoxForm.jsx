import React, {useState} from 'react';

const BoxForm = ({boxList, setBoxList}) => {

    const [color, setColor] = useState("");

    const boxHandler = e => {
        e.preventDefault();
        setBoxList([...boxList, color]);
    }

    return(
        <div>
            <form onSubmit = {boxHandler}>
                <label style={{marginRight: "10px", fontWeight: "bold"}}>Color</label>
                <input type="text" onChange={e => setColor(e.target.value)}/>
                <button style={{backgroundColor: "lightgrey", margin: "10px"}}>Add</button>
            </form>
        </div>
    )

}

export default BoxForm;