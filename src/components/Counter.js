import React from 'react'
import Button from './Button'

const Counter = (props) => {
    return(
    <main>
        
        <Button 
        behavior = {props.increment}
        textContent = {"Increment"}/>
            <p>
                {props.count}
            </p>
        <Button 
        behavior = {props.decrement}
        textContent = {"Decrement"}/>
      </main>
)
    }

export default Counter