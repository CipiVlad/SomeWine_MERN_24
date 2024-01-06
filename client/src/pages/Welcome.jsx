import './Welcome.scss'
import grape from '../icons/grape.png'

const Welcome = () => {

    /*
    logic for after 2 Seconds
    skip to Home
    */

    return (
        <div className='grape_icon_welcome'>
            <img src={grape} alt="grape-icon" />
        </div>
    )
}
export default Welcome