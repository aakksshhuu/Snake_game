import React from 'react';
import './app.css';
export default(props)=>
{
    return(
        <div>
             {props.snakeDots.map((dot,i)=>{
                 const style={
                     left:`${dot[0]}%`,
                     top:`${dot[1]}%`,
                 }
                 return(
                     <div className="snake-dot" key={1} style={style}></div>
                 )
             })}
        </div>
        
    )
}