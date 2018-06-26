import React from 'react'
import Todo from "./Todo.js"

export default function List(props) {
    return (
<input value={props.input} onChange = {(e => props.doChange(e.target.value))}/>
    )
}