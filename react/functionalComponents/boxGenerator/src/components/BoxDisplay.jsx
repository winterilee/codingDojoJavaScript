import React from 'react';

const BoxDisplay = ({boxList}) => {

    return(
        <div>
            {
                boxList.map((color, idx) => {
                    return(
                        <div key={idx} style={{
                            height: "100px",
                            width: "100px",
                            backgroundColor: color,
                            display: "inline-block",
                            margin: "10px"
                        }}></div>
                    )
                })
            }
        </div>
    )
}

export default BoxDisplay;