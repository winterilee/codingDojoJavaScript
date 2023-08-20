import React from 'react';

const TabButtons = ({tabList, setCurrentIndex}) => {

    return(
        <div>
            {
                tabList.map((tab, idx) => {
                    return(
                        <button key={idx} style={{backgroundColor: "lightgrey", margin: "10px"}} onClick={e => setCurrentIndex(idx)}>{tab.name}</button>
                    )
                })
            }
        </div>
    )
}

export default TabButtons;