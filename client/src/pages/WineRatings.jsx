import axios from "axios"
import NavBar from "../components/NavBar"
import './WineRatings.scss'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const WineRatings = () => {

    // const dummy = [
    //     {
    //         "id": 1,
    //         "wine": "abc",
    //         "rating": 1
    //     },
    //     {
    //         "id": 2,
    //         "wine": "def",
    //         "rating": 1
    //     },
    //     {
    //         "id": 3,
    //         "wine": "ghi",
    //         "rating": 2
    //     }

    // ]
    const [rating, setRating] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:8080/ratings/all')
            .then((response) => {
                console.log(response.data.data);
                setRating(response.data.data);
            })
            .catch((error) => { console.log(error); })
    }, [])

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

            {/* display ratings  */}
            {
                rating.map((element, index) => (
                    <div className="data_output_container" key={index}>
                        <div className="data_output_container_flex">
                            <div className='output_searchfield'>
                                <Link to={`/details/ratings/${element._id}`}>
                                    <p>Wine: {element.title}</p>
                                    <p>Rating: {element.score}</p>
                                </Link>
                            </div>


                        </div>
                    </div>
                ))
            }



        </div>
    )
}
export default WineRatings