import React from 'react'

const buttonDisabled = false;
const buttonStyle = {
    backgroundColor: buttonDisabled ? 'gray' : 'blue',
    color: buttonDisabled ? 'darkgray' : 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: buttonDisabled ? 'not-allowed' : 'pointer',
}


const StyledButton = () => {
    return (
        <div style={{marginTop: '20px', marginLeft: '15px' }}>
            <h1 style={{fontSize: '30px', fontFamily: 'serif'}}>This is a styled button</h1>
            <button style={buttonStyle} disabled={buttonDisabled}>Button!</button>
        </div>
    )
    }

export default StyledButton
