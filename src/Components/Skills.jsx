import begin from '../images/begginers.png'
import css from '../images/css.png'
import data from '../images/data.png'
import development from '../images/development.png'
import finance from '../images/finance.png'
import html from '../images/html.png'
import js from '../images/js.png'
import react from '../images/react.png'
import responsive from '../images/responsive.png'
import structures from '../images/structures.png'

function Skills() {
    return (
        <div className="flex items-center justify-center flex-col text-center p-5 pt-20 pb-6 col-md-4">
            <h2 className="pb-4">Skills</h2>
            <div className="flex items-center justify-center flex-col">
                <img src={development} alt="" className="col-5 p-2" />
                <img src={html} alt="" className="col-5 p-2" />
                <img src={css} alt="" className="col-5 p-2" />
                <img src={responsive} alt="" className="col-5 p-2" />
                <img src={js} alt="" className="col-5 p-2" />
                <img src={react} alt="" className="col-5 p-2" />
                <img src={begin} alt="" className="col-5 p-2" />
                <img src={data} alt="" className="col-5 p-2" />
                <img src={structures} alt="" className="col-5 p-2" />
                <img src={finance} alt="" className="col-5 p-2" />
            </div>
        </div>
    )
}

export default Skills