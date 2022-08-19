import React, {useState, useEffect} from 'react';
import {apiAuthorizeYoutube, fetchData} from "../data/fetchData"
import Loader from 'react-spinner-loader'
import HorizontalScrollMenu from './HorizontalScrollbar';
export default function ExerciseYoutube(props){
    const [videosData, setVideosData] = useState('')
    const [loader, setLoader] = useState(true)


    useEffect(()=>{
        async function exerciseVideosData(){
            const data = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${props.name} exercise`, apiAuthorizeYoutube);
            setVideosData(data.contents)
             
        }
        exerciseVideosData()
    }, [])
    function showVideos() {
    if (videosData.length){
        const videos = videosData.map(video=>{
            return(
                <a 
                href={`https://www.youtube.com/watch?v=${video.video.videoId}`}
                target="_blank"
                className='youtube-vidoe-info'
                key={video.video.videoId}>
                    <div className="exercise-youtube-container">
                        <img src={video.video.thumbnails[0].url} className='tumbnail-img'/>
                            <div style={{gap:'10em'}}>
                                <h2 className='youtube-vidoe-info'>{video.video.title}</h2>
                                <p className='youtube-vidoe-info'>{video.video.channelName}</p>
                                <p className='youtube-vidoe-info'>{video.video.lengthText} Minutes</p>
                                <p className='youtube-vidoe-info'>{video.video.viewCountText}</p>
                                <p className='youtube-vidoe-info'>{video.video.publishedTimeText}</p>
                            </div>
                    </div>
                </a>
            )
        }) 
        return videos
    }
    else{
        return <Loader show = {loader} spinnerSize='3em'/>
    }}


    return(
        <div>   
            <h1 id ='exercises' className="header-youtube">Watch <span>{props.name}</span> exercise videos</h1>
            <HorizontalScrollMenu data={showVideos()}/>
        </div>
    )
}