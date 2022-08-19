import React, {useState, useEffect} from 'react';
import {apiAuthorize, fetchData} from "../data/fetchData"
import Loader from 'react-spinner-loader'
import HorizontalScrollMenu from './HorizontalScrollbar';
import {useParams} from 'react-router-dom'
export default function SimilarExercises(props){
    const [similarTarget, setSimilarTarget] = useState('')
    const [similarEquipment, setSimilarEquipment] = useState('')
    const [loader, setLoader] = useState(true)
    const {ExerciseId} = useParams()

    useEffect(()=>{
        async function similarTargetData(){
            const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/target/${props.target}`, apiAuthorize);
            setSimilarTarget(data)
             
        }
        similarTargetData()
        
        async function similarEquipmentData(){
            const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/equipment/${props.equipment}`, apiAuthorize);
            setSimilarEquipment(data)
        }
        similarEquipmentData()
    }, [])

    function showSimilarTarget(){
        if(similarTarget.length){
            const exercises = similarTarget.map(exercise =>{
                if (ExerciseId !== exercise.id){
                    return(
                        <div key={exercise.id}>
                            <a href={`/exerciseDetail/${exercise.id}`}
                            style={{textDecoration: 'none'}}>
                                <div className="similarTarget-container" key={exercise.id}>
                                    <img className="similarTarget-gif" src={exercise.gifUrl} />
                                    <h2 className="similarTarget-name">{exercise.name}</h2>
                                     <div style={{display:'flex', flexDirection: 'column', marginTop:'.5em'}}
                                     className='similar-info-container'>
                                        <button className="similar-info part-icon">{exercise.bodyPart}</button>
                                        <button className="similar-info target-icon">{exercise.target}</button>
                                        <button className="similar-info equipment-icon">{exercise.equipment}</button>
                                    </div>
                                </div>
                            </a>
                        </div>
                    )
                }
            })
        return exercises
        }
        else{
            <Loader show = {loader} spinnerSize='3em'/>
        }
    }

    function showSimilarEquipment(){
        if(similarEquipment.length){
            const exercises = similarEquipment.map(exercise =>{
                if (ExerciseId !== exercise.id){
                return(
                    <div key={exercise.id}>
                        <a href={`/exerciseDetail/${exercise.id}`} 
                        style={{textDecoration: 'none'}}>
                            <div className="similarTarget-container" key={exercise.id}>
                                <img className="similarTarget-gif" src={exercise.gifUrl} />
                                <h2 className="similarTarget-name">{exercise.name}</h2>
                                <div className='similar-info-container' key={exercise.id}style={{display:'flex', flexDirection: 'column', marginTop:'.5em'}}>
                                    <button className="similar-info part-icon">{exercise.bodyPart}</button>
                                    <button className="similar-info target-icon">{exercise.target}</button>
                                    <button className="similar-info equipment-icon">{exercise.equipment}</button>
                                </div>
                            </div>
                        </a>
                    </div>
                )}
            })
        return exercises
        }
        else{
            <Loader show = {loader} spinnerSize='3em'/>
        }
    }

    return (
        <div>
            <h1 className="similarTarget-title">Similar <span>target muscle</span> exercises</h1>
            <HorizontalScrollMenu data={showSimilarTarget()}/>
            <h1 className="similarTarget-title">Similar <span>equipment</span> exercises</h1>
            <HorizontalScrollMenu data={showSimilarEquipment()}/>
        </div>
    )
}