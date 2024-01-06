import NavBar from "../components/NavBar"
import './Events.scss'

const Events = () => {
    const dummy = [
        {
            "id": 1,
            "event": "abc",
            "rating": 1
        },
        {
            "id": 2,
            "event": "def",
            "rating": 1
        },
        {
            "id": 3,
            "event": "ghi",
            "rating": 2
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

            {/* display some events but not all */}
            {
                dummy.map((element, index) => (
                    <div className="data_output_container" key={index}>
                        <div className="data_output_container_flex">
                            <p>Id: {element.id}</p>
                            <p>Event: {element.event}</p>
                            <p>Rating: {element.rating}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default Events
