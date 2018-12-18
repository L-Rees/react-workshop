import React from 'react'
const Button = ({behavior, textContent}) => (
    <button onClick={behavior}>
         {textContent}
    </button>
)

export default Button