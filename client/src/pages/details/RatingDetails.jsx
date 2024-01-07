import { Link, useParams } from "react-router-dom"
import NavBar from "../../components/NavBar"
import { useEffect, useState } from "react";
import axios from 'axios'
import './RatingDetails.scss'
import BackToHome from "../../components/BackToHome";

const RatingDetails = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8080/ratings/details/${id}`)
            .then((response) => {
                console.log(response.data);
                setDetail(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    return (
        <div>
            <NavBar />

            <div className="data_output_container">
                <div>
                    <p>Wine: {detail.title}</p>
                    <p>Rating: {detail.score}</p>
                    <p>Origin: {detail.origin}</p>
                    <p>Vintage: {detail.vintage}</p>
                    <p>Treatment: {detail.treatment}</p>
                    <p>Grape Variety: {detail.grapeVariety}</p>
                    <p>Character: {detail.character}</p>
                    <p>Cultivation: {detail.cultivation}</p>
                    <p>Quality: {detail.quality}</p>
                    <p>Wine Category: {detail.wineCategory}</p>
                    <p>Price Range: {detail.priceRange}</p>
                    <p>Notes: {detail.notes}</p>
                </div>
            </div>

            <BackToHome />
        </div>
    )
}
export default RatingDetails