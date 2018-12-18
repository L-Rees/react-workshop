import React from 'react'
const Button = props => (
    <button onClick={props.behavior}>
         {props.textContent}
    </button>
)

export default Button