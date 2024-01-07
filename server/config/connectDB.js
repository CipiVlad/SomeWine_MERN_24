import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URI)
        console.log('connected to: ', connection.connection.host);
    } catch (err) {
        console.log(err);
    }
}

export default connectDB