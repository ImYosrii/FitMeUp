import React, {useState, useRef, useEffect} from 'react';
import Pagination from '@mui/material/Pagination';
import {apiAuthorize, fetchData} from "../data/fetchData"
import Exercise from './Exercise'
import BodyParts from './bodyParts'
import Loader from 'react-spinner-loader'

export default function SearchExercise(){
    const [searchExcer, setSearchExcer] = useState('')
    const [Alldata, setAllData] = useState('')
    const searchedData = useRef('')
    const [bodyPartsData, setBodyPartsData] = useState('')
    const [currentPart, setCurrentPart] = useState('All')
    const [exercisesBody, setExercisesBody] = useState('')
    const [loader, setLoader] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(8); 
    useEffect(() => {
    async function fetchExercisesData () {
      const data = await fetchData('https://exercisedb.p.rapidapi.com/exercises', apiAuthorize)

      setAllData(data)
      
    }
    async function fetchBodyPartData () {
      const bodyData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', apiAuthorize)

      setBodyPartsData(['All',...bodyData])
      
    }

    fetchExercisesData()
    fetchBodyPartData()
}, [])
    useEffect(()=>{
       if (currentPart !== 'All' && currentPart.length ){
           async function fetchBodyPartExercise () {
               const bodyExercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${currentPart}`, apiAuthorize)
             setExercisesBody(bodyExercise)
       }
       fetchBodyPartExercise()
    }
    else if (currentPart === 'All'){
           async function fetchBodyPartExercise () {
               const bodyExercise = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/back`, apiAuthorize)
             setExercisesBody(bodyExercise)
       }
       fetchBodyPartExercise()
    }

    },[currentPart])

    function handleSearch(e){
        setSearchExcer(e.target.value)
    }
    function handleSubmit(event){
        event.preventDefault()
        if(searchExcer.length > 0 ){
            searchedData.current = Alldata.filter(
                exercise => 
                exercise.name.toLowerCase().includes(searchExcer) || 
                exercise.target.toLowerCase().includes(searchExcer) || 
                exercise.equipment.toLowerCase().includes(searchExcer) || 
                exercise.bodyPart.toLowerCase().includes(searchExcer)
            )
            window.scrollTo({top:940, behavior: 'smooth' });
            setSearchExcer('')
            console.log('searched')
        }
        }
    function holdBodyPart(part){
        setCurrentPart(part)
        window.scrollTo({top:940, behavior: 'smooth' })

    }
    function showExercises(){
        if(searchedData.current.length){
            const exercise = searchedData.current.map(exercise => <Exercise data={exercise} key={exercise.id} />)
            searchedData.current = ''
            return exercise
        }
        else if (currentPart === 'All' && !searchedData.current.length){
            const exercise = Alldata.map(exercise => <Exercise data={exercise} key={exercise.id} />)
            return exercise
        }
        else if (currentPart !== 'All' && exercisesBody.length && !searchedData.current.length){
            const exercise = exercisesBody.map(exercise => <Exercise data={exercise} key={exercise.id} />)
            return exercise
        }
    }
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = Alldata.length && showExercises().slice(indexOfFirstExercise, indexOfLastExercise);


    function paginate(event, value){
        setCurrentPage(value)
  }
        const bodyParts = bodyPartsData.length > 0 ? bodyPartsData.map(bodyPart =>
             <BodyParts 
                part={bodyPart} 
                key={bodyPart} 
                id={bodyPart} 
                func={holdBodyPart}
                currentPart={currentPart}/>) : ''

    //toDo makse selected part  overwrites the search

    return(
        <div>
            <form 
                onSubmit={handleSubmit} className="search-form">
                <input 
                    id="search" 
                    className='search-input'
                    type="text" 
                    value={searchExcer}
                    onChange={handleSearch}
                    placeholder="Exercise, Equipment, Muscle target"/>
                <button className="search-btn">Search</button>
            </form>
            <h2 className={`criterias-title ${!Alldata.length?'loader':''}`}>Muscle Criteria</h2>
                {!Alldata.length && <Loader show = {loader} spinnerSize='3em'/>}
            <div className='bodyParts-container'>
                {bodyParts}
            </div>
            <h2 className={`resualts-title ${!Alldata.length?'loader':''}`} id="exercises">Exercises</h2>
            <div className='exercises-container'>
                {!Alldata.length && <Loader show = {loader} spinnerSize='3em'/>}
                {Alldata.length && currentExercises}
                <div className='pagination-container'>
                {Alldata.length && <Pagination
                                        color="standard"
                                        shape="rounded"
                                        defaultPage={1}
                                        count={Math.ceil(showExercises().length / exercisesPerPage)}
                                        page={currentPage}
                                        onChange={paginate}
                                    />}
                </div>
            </div>
        </div>
    )
}