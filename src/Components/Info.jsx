
import inf from '../images/file-find.svg';




function Info() {
    return (
        <div className="flex items-center justify-center flex-col text-center p-5 col-md-4">
            <h2 className="pb-3">About Me</h2>
            <img className='pb-5 pt-4 col-3 fill-white' src={inf} alt="" />
            <p className='text-sm max-w-x1 mb-6 font-bold'>I am a cheerful, responsible and proactive person. At the end of my professional career I began to certify myself as a Data Scientist and Web Developer in the DataCamp and SoloLearn platforms respectively. Through this experience I have learned to analyze data with Python, R and SQL, as well as Web Development in HTML, CSS and JavaScript.</p>
            <p>I am currently studying the Full-Stack Developer bootcamp at Prográmate-Academy in the EducaMás, GOYN & Simplon partnership program.</p>
        </div >
    )
}

export default Info