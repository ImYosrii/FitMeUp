import React, {memo} from 'react';
import {Link} from 'react-router-dom'
function Exercise(props){
    return (
        <Link to={`/exerciseDetail/${props.data.id}`}>
            <div className="exercise-detail-container">
                <img src={props.data.gifUrl} alt={props.data.name} className="exercise-gif"/>
                <h2 className="exercise-details-title">{props.data.name}</h2>
                <button className='details-icons target-icon'>{props.data.target}</button>
                <button className='details-icons equipment-icon'>{props.data.bodyPart}</button>
            </div>
        </Link>
    )
}
export default memo(Exercise)