import React from 'react';
const BlueBtn = ({content, action}) => {
    return (
        <button className='blueBtn' onClick={action}>{content}</button>
    );
};

export default BlueBtn;