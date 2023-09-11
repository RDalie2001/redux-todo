import React from 'react'
import classes from './Button.module.css'
function Button(props) {
  return (
    <button  onClick={props.onClick} className={classes.button + ` btn btn-${props.color}`}>{props.children}</button>
  )
}

export default Button