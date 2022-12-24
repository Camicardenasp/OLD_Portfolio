import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'

function Made() {
    return (
        <div className="flex items-center justify-center flex-col text-center p-5 pt-20 pb-6">
            <div className='pb-3'>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h4>Made with Vite + React</h4>
        </div>
    )
}

export default Made