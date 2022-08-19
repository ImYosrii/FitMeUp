import React from 'react';
export default function BodyParts(props){
    return(
        <div 
            className={`bodyPart-container`} 
            onClick={()=>props.func(props.part)}>

            <h1 className={`bodyPart ${props.part === props.currentPart ? 'bodyClicked' : ''}`}>
                {props.part}
            </h1>
        </div>
    )
}