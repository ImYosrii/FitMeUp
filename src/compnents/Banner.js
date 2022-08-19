import React from 'react';
export default function Banner(){
    return(
        <div className="banner-container">
            {/* <img src={BackgroundImage} className="banner-img"/> */}
            <div className="banner-info-container">
                <h3 className="title">Fit Me Up</h3>
                <h1 className='banner-catch'>Sweat, Smile And Repeat</h1>
                <p>Get fit with over 1300+ exercises just for you</p>
                <button className="exercises-btn">
                    <a href="#exercises">Check out the exercises</a>
                </button>
            </div>
        </div>
    )
}