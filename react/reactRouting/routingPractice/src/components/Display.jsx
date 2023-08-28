import React from 'react';
import { useParams } from 'react-router-dom';

const Display = (props) => {
    
    const {request, color, backgroundColor} = useParams();

    return(
        <div>
            {
                isNaN(request)?
                <h4 style={{color: color, backgroundColor: backgroundColor}}>This is a world: {request}</h4>
                : <h4>This is a number: {request}</h4>
            }
        </div>
    );
}

export default Display;