import React from 'react';


export default (props)=>(
   
    <button 
        type="button" 
        className={props.color}
        value={props.text}
        onClick={props.onClick}
      
    >
        {props.text}
    </button>
)