import React, {useState} from 'react';

const CreateUser = ({setNewUser}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const create = e => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, password, confirmPassword};
        setNewUser(newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return(
        <div>
            <form onSubmit = {create}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ e => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ e => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={ e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ e => setConfirmPassword(e.target.value)}/>
                </div>
                <button style={{backgroundColor: "lightgrey"}}>Submit</button>
            </form>
        </div>
    )

}

export default CreateUser;