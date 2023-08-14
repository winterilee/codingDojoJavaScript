import React from 'react';

const PersonCard = ({newUser}) => {
    return(
        <div>
            {
                newUser ?
                <>
                    <h5>Your Form Data</h5>
                    <p>First Name: {newUser.firstName}</p>
                    <p>Last Name: {newUser.lastName}</p>
                    <p>Email: {newUser.email}</p>
                    <p>Password: {newUser.password}</p>
                    <p>Confirm Password: {newUser.confirmPassword}</p>
                </>
                : <></>
            }
        </div>
    )
}

export default PersonCard;