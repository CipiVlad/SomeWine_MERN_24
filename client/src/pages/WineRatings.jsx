import NavBar from "../components/NavBar"
import './WineRatings.scss'

const WineRatings = () => {

    const dummy = [
        {
            "id": 1,
            "wine": "abc",
            "rating": 1
        },
        {
            "id": 2,
            "wine": "def",
            "rating": 1
        },
        {
            "id": 3,
            "wine": "ghi",
            "rating": 2
        }

    ]

    return (
        <div>
            <NavBar />
            <h2>Wine Ratings</h2>
            <div className='searchfield_container'>
                <input
                    type="text"
                    name="searchfield"
                    id="searchfield"
                    placeholder='search ratings'
                />
            </div>

            {/* display some ratings but not all */}
            {
                dummy.map((element, index) => (
                    <div className="data_output_container" key={index}>
                        <div className="data_output_container_flex">
                            <p>Id: {element.id}</p>
                            <p>Wine: {element.wine}</p>
                            <p>Rating: {element.rating}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
export default WineRatings