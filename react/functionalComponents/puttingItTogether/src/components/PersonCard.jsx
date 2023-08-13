import React, {useState} from 'react';

const PersonCard = ({firstName, lastName, age, hairColor}) => {
    
    const [currentAge, setCurrentAge] = useState(age);
    const birthdayHandler = event => {
        const newAge = currentAge + 1;
        setCurrentAge(newAge);
    };
    return(
        <div>
            <h3>{lastName}, {firstName}</h3>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={birthdayHandler} style={{backgroundColor: "lightgrey"}}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;