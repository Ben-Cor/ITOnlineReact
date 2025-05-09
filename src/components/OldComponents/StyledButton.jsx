import React, { useState } from 'react'


const StyledButton = () => {

    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: buttonDisabled ? 'gray' : isHovered ? 'darkblue' : 'blue',
        color: buttonDisabled ? 'darkgray' : 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: buttonDisabled ? 'not-allowed' : 'pointer',
    };



    function disableButton() {
        setButtonDisabled((prevState) => !prevState);
    }

    return (
        <div style={{textAlign: 'center', color: 'red', backgroundColor: 'beige', marginTop: '20px', marginLeft: '15px' }}>
            <h1 style={{fontSize: '30px', fontFamily: 'serif'}}>This is a styled button</h1>
            <button onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)} 
                    onClick={disableButton} style={buttonStyle} 
                    disabled={buttonDisabled}
            >Button!</button>
        </div>
    )
    }

export default StyledButton