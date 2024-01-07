import express from 'express'

const router = express.Router()


//get all ratings
router.get('/all', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

//add rating
router.post('/all', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})
//get single rating
router.get('/detail/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

//update rating
router.put('/detail/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

//delete rating
router.delete('/detail/:id', async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

export default router