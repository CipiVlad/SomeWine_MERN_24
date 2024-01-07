import express from 'express'
import Rating from '../models/ratingsModel.js'


const router = express.Router()


//get all ratings
router.get('/all', async (req, res) => {
    try {
        const getAllRatings = await Rating.find({})
        res.status(200).json({
            count: getAllRatings.length,
            data: getAllRatings
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

//add rating
router.post('/all', async (req, res) => {
    try {
        const ratingObject = {
            title: req.body.title,
            origin: req.body.origin,
            vintage: req.body.vintage,
            treatment: req.body.treatment,
            grapeVariety: req.body.grapeVariety,
            character: req.body.character,
            cultivation: req.body.cultivation,
            quality: req.body.quality,
            wineCategory: req.body.wineCategory,
            priceRange: req.body.priceRange,
            score: req.body.score,
            notes: req.body.notes
        }
        const addRating = await Rating.create(ratingObject)
        res.status(200).send(addRating)

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
//get single rating
router.get('/details/:id', async (req, res) => {
    try {
        const { id } = req.params
        const detail = await Rating.findById(id)
        res.status(200).send(detail)

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

//update rating
router.put('/details/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

//delete rating
router.delete('/details/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

export default router