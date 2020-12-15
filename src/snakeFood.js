import React from 'react';
import './app.css';
export default (props)=>
{
const style=
{
    left:`${props.dot[0]}%`,
    top:`${props.dot[1]}%`
}

    return(
        <div className="snake-food" style={style}></div>
    )
}