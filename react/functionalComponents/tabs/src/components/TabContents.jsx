import React from 'react';

const TabContents = ({tabList, currentIndex}) => {

    return(
        <div>
            {tabList[currentIndex].content}
        </div>
    )
}

export default TabContents;