import profileImage from '../assets/MyProfileSmiling.png'

function Info() {
    return (
        <div className="flex items-center justify-center flex-col text-center p-5 pt-20 pb-6 col-md-4">
            <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'> Hi, I'm Camilo Alberto Cárdenas Poveda</ h1>
            <img className="img-fluid rounded-pill p-5" width="350" src={profileImage} alt="myphoto" />
            <h5 className='text-base pb-5 md:text-xl mb-3 font-medium'>| Web Developer | Data Analyst | Sustainability Analyst | Financial Analyst | Musician | Consultant |</h5>
            <h2>Info</h2>
            <p className='text-sm max-w-x1 mb-6 font-bold'>I am a cheerful, responsible and proactive person. At the end of my professional career I began to certify myself as a Data Scientist and Web Developer in the DataCamp and SoloLearn platforms respectively. Through this experience I have learned to analyze data with Python, R and SQL, as well as Web Development in HTML, CSS and JavaScript.</p>
            <p>I am currently studying the Full-Stack Developer bootcamp at Prográmate-Academy in the EducaMás, GOYN & Simplon partnership program.</p>
        </div >
    )
}

export default Info