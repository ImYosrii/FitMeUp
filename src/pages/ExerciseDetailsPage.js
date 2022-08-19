import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {apiAuthorize, fetchData} from "../data/fetchData"
import Loader from 'react-spinner-loader'
import ExerciseYoutube from '../compnents/ExerciseYoutube';
import SimilarExercises from '../compnents/SimilarExercises'
export default function ExerciseDetailsPage(props) {
    const {exerciseId} = useParams()
    const [exercise, setExercise] = useState('')
    const [loader, setLoader] = useState(true)
    useEffect(() => {
    async function fetchExercisesData () {
      const data = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseId}`, apiAuthorize)
      setExercise(data)
    }
    fetchExercisesData()
}, [])
    return(
        <>
        {window.scrollTo({ top: 0, behavior: 'smooth' })}
        {!exercise && <Loader show = {loader} spinnerSize='3em'/>}
        {exercise && 
            <div className='exercise-detailPage-container'>
                <img src={exercise.gifUrl} className="exercise-detailPage-gif" />
                <div style={{transform: 'translateX(2.5em)', width:'90%'}}>
                    <h1 className="exercise-detailPage-title">{exercise.name}</h1>
                </div>
                <div className='exercise-detailPage-description'>
                    <p><span> {exercise.name}</span> is one of the best
                    exercises to target your <span>{exercise.target}</span>. It
                        will help you improve your mood and gain energy.
                    </p>
                </div>
                <div className='exercise-detailPage-points-container'>
                    <h2><button className="exercise-point target-icon">{exercise.target}</button></h2>
                    <h2><button className="exercise-point part-icon">{exercise.bodyPart}</button></h2>
                    <h2><button className="exercise-point equipment-icon">{exercise.equipment}</button></h2>
                </div>
                <ExerciseYoutube 
                    name={exercise.name} 
                    target={exercise.target}
                    equipment={exercise.equipment} />
                <SimilarExercises 
                    target={exercise.target}
                    equipment={exercise.equipment}  />
            </div>
    }
        </>
    )
}