import './Welcome.scss'
import grape from '../icons/grape.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Welcome = () => {

    /*
    logic for after 2 Seconds
    skip to Home
    */

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => { navigate('/home') }, 2000)
    }, [])


    return (
        <div className='grape_icon_welcome'>
            <img src={grape} alt="grape-icon" />
        </div>
    )
}
export default Welcome