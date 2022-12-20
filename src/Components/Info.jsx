import profileImage from '../assets/MyProfileSmiling.png'

function Info() {
    return (
    <div>
        <h1>Camilo Alberto Cárdenas Poveda</h1>
        <img className="img-fluid rounded-pill " width="350" src={profileImage} alt="myphoto"/>
        <h2>Info</h2>
        <h5>| Web Developer | Data Analyst | Sustainability Analyst | Financial Analyst | Musician | Consultant |</h5>
        <p>I am a cheerful, responsible and proactive person. At the end of my professional career I began to certify myself as a Data Scientist and Web Developer in the DataCamp and SoloLearn platforms respectively. Through this experience I have learned to analyze data with Python, R and SQL, as well as Web Development in HTML, CSS and JavaScript.</p>
        <p>I am currently studying the Full-Stack Developer bootcamp at Programámate-Academy in the EducaMás, GOYN & Simplon program.</p>
    </div>
    )
}

export default Info