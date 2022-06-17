import React from 'react';
const BlueBtn = ({content, action, disable}) => {
    return (
        <>
            <button className={disable ? 'blueBtn disable' : 'blueBtn'} onClick={action} disabled={disable ? true : false}>
            {content}
            <span className="tooltiptext">Vous devez être connecté</span>
            </button>
           
        </>
    );
};

export default BlueBtn;