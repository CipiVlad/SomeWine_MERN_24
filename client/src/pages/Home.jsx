import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import './Home.scss'
import AddButton from '../components/AddButton'


const Home = () => {
    return (
        <div className='home_container'>
            <NavBar />
            <div className='routes_and_searchfield_container'>
                <div className='routes_container'>
                    <Link to={'/ratings'}>
                        <h2>Wine Ratings</h2>
                    </Link>
                    <Link to={'/events'}>
                        <h2>Events</h2>
                    </Link>
                </div>
                <div className='searchfield_container'>
                    <input
                        type="text"
                        name="searchfield"
                        id="searchfield"
                        placeholder='search ratings or events'
                    />
                </div>

                {/* display user input and set link to detail page */}
                {/* logic is:
                    if searched for wine rating, then go to wine rating detail
                    if searched for wine event, then go to wine event detail
                    else show search field 
                */}

                {/* 
                <div className='output_searchfield'>
                    <Link to={}></Link>
                </div>
                 */}

            </div>
            <AddButton />
        </div>
    )
}
export default Home