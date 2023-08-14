import React, {useState} from 'react';

const Registration = ({setNewUser}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = e => {
        e.preventDefault();
        const sampleUser = {firstName, lastName, email, password, confirmPassword};
        setNewUser(sampleUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    return(
        <div>
            <form onSubmit = {createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ e => setFirstName(e.target.value)}/>
                </div>
                {
                    firstName.length < 2 ? <div>First Name must be at least 2 characters.</div> : <></>
                }
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ e => setLastName(e.target.value)}/>
                </div>
                {
                    lastName.length < 2 ? <div>Last Name must be at least 2 characters.</div> : <></>
                }
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ e => setEmail(e.target.value)}/>
                </div>
                {
                    email.length < 5 ? <div>Email must be at least 5 characters.</div> : <></>
                }
                <div>
                    <label>Password:</label>
                    <input type="password" onChange={ e => setPassword(e.target.value)}/>
                </div>
                {
                    password.length < 8 ? <div>Password must be at least 8 characters.</div> : <></>
                }
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" onChange={ e => setConfirmPassword(e.target.value)}/>
                </div>
                {
                    confirmPassword !== password ? <div>Password must match.</div> : <></>
                }
                <button style={{backgroundColor: "lightgrey"}}>Submit</button>
            </form>
        </div>
    )

}

export default Registration;