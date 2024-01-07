import NavBar from "../components/NavBar"
import './Events.scss'

const Events = () => {
    const dummy = [
        {
            "id": 1,
            "event": "abc",
            "bestWine": 1
        },
        {
            "id": 2,
            "event": "def",
            "bestWine": 1
        },
        {
            "id": 3,
            "event": "ghi",
            "bestWine": 2
        }]
    return (
        <div>
            <NavBar />
            <h2>Events</h2>
            <div className='searchfield_container'>
                <input
                    type="text"
                    name="searchfield"
                    id="searchfield"
                    placeholder='search events'
                />
            </div>

            {/* display events  */}
            {
                dummy.map((element, index) => (
                    <div className="data_output_container" key={index}>
                        <div className="data_output_container_flex">
                            {/* <p>Id: {element.id}</p> */}
                            {/* 
                                set link to :detailsPage what user chooses to click

                                <div className='output_searchfield'>
                                 <Link to={}></Link>
                                </div>
                 
                            */}
                            <p>Event: {element.event}</p>
                            <p>Best Wine: {element.bestWine}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Events
