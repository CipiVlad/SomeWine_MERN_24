import { useState } from 'react'
import './AddRating.scss'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const AddRating = () => {
    const [title, setTitle] = useState('')
    const [origin, setOrigin] = useState('')
    const [vintage, setVintage] = useState()
    const [treatment, setTreatment] = useState('')
    const [grapeVariety, setGrapeVariety] = useState('')
    const [character, setCharacter] = useState('')
    const [cultivation, setCultivation] = useState('')
    const [quality, setQuality] = useState('')
    const [wineCategory, setWineCategory] = useState('')
    const [priceRange, setPriceRange] = useState('')
    const [score, setScore] = useState()
    const [notes, setNotes] = useState('')

    //navigate back to home
    const navigate = useNavigate()

    //add logic
    const handleSave = () => {

        //create ratingObject
        const ratingObject = {
            title,
            origin,
            vintage,
            treatment,
            grapeVariety,
            character,
            cultivation,
            quality,
            wineCategory,
            priceRange,
            score,
            notes
        }

        axios
            .post('http://localhost:8080/ratings/all', ratingObject)
            .then(() => {
                navigate('/home')
            })
            .catch((error) => {
                console.log(error);
            })

    }



    return (
        <div>
            <div className='add_box'>
                <h2>add your rating</h2>
            </div>

            <label htmlFor="title">Title:</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

            <label htmlFor="origin">Origin:</label>
            <input type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} />

            <label htmlFor="vintage">Vintage:</label>
            <input type="number" value={vintage} onChange={(e) => setVintage(e.target.value)} />

            <label htmlFor="treatment">Treatment:</label>
            <input type="text" value={treatment} onChange={(e) => setTreatment(e.target.value)} />

            <label htmlFor="grapeVariety">Grape Variety</label>
            <input type="text" value={grapeVariety} onChange={(e) => setGrapeVariety(e.target.value)} />

            <label htmlFor="character">Character:</label>
            <input type="text" value={character} onChange={(e) => setCharacter(e.target.value)} />

            <label htmlFor="cultivation">Cultivation:</label>
            <input type="text" value={cultivation} onChange={(e) => setCultivation(e.target.value)} />

            <label htmlFor="quality">Quality:</label>
            <input type="text" value={quality} onChange={(e) => setQuality(e.target.value)} />

            <label htmlFor="wineCategory">Wine Category:</label>
            <input type="text" value={wineCategory} onChange={(e) => setWineCategory(e.target.value)} />

            <label htmlFor="priceRange">Price Range: </label>
            <input type="text" value={priceRange} onChange={(e) => setPriceRange(e.target.value)} />

            <label htmlFor="score">Score:</label>
            <input type="number" value={score} onChange={(e) => setScore(e.target.value)} />

            <label htmlFor="note">Notes:</label>
            <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />

            <button onClick={handleSave}>Save</button>

        </div>
    )
}
export default AddRating