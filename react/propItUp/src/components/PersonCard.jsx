import React from 'react';

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    return(
        <div>
            <h3>{lastName}, {firstName}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default PersonCard;