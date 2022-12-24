import education from '../images/education.svg';

function Education() {
    return (
        <div className="flex items-center justify-center flex-col text-center p-5 pt-20 pb-6 col-md-4">
            <h2 className="pb-3">Education</h2>
            <img className='pb-5 pt-4 col-3 grow' src={education} alt="" />

            <p className="mb-0">Prográmate Academy - BootCamp</p>
            <p className="mb-0 text-left">Full Stack Development</p>
            <p className="mb-0">Simplon, GOYN & Quiero ser Digital</p>
            <p className="mb-0">Oct 2022 - Mar 2023</p>

            <p className="mb-0 pt-5">Universidad de los Andes</p>
            <p className="mb-0 font-bold ">Bachelor of Business Administration - BBA</p>
            <p className="mb-0 bold">School of Management</p>
            <p className="mb-0">Ago 2019 - Oct 2022</p>

            <p className="mb-0 pt-5">Universidad de los Andes</p>
            <p className="mb-0 font-bold">Music Composition for Film and Media</p>
            <p className="mb-0 font-bold">Bachelor of Arts</p>
            <p className="mb-0">Ago 2015 - abr 2021</p>
        </div >
    )
}

export default Education