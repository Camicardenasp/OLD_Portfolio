import React from 'react'
import profileImage from '../assets/MyProfileSmiling.png'

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center p-5 col-md-4">
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'> Hi, I'm Camilo Alberto Cárdenas Poveda</ h1>
            <img className="img-fluid rounded-pill p-5" width="350" src={profileImage} alt="myphoto" />
            <h5 className='text-base md:text-xl font-medium'>| Web Developer | Data Analyst | Sustainability Analyst | Financial Analyst | Musician | Consultant |</h5>
        </div>
    )
}

export default Intro