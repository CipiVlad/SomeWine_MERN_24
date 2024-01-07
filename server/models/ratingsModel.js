import mongoose from "mongoose";

const ratingSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    origin: {
        type: String,
        required: false
    },
    vintage: {
        type: Number,
        required: false
    },
    treatment: {
        type: String,
        required: false
    },
    grapeVariety: {
        type: String,
        required: false
    },
    character: {
        type: String,
        required: false
    },
    cultivation: {
        type: String,
        required: false
    },
    quality: {
        type: String,
        required: false
    },
    wineCategory: {
        type: String,
        required: true
    },
    priceRange: {
        type: String,
        required: false
    },
    score: {
        type: Number,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
},
    {
        timestamps: true
    }
)

const Rating = mongoose.model('ratings', ratingSchema)

export default Rating