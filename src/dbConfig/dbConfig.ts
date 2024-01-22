import mongoose from "mongoose";

export async function connect() {
    try {
        console.log(typeof process.env.MONGO_URI)
        mongoose.connect(process.env.MONGO_URI as string)

        const connection = mongoose.connection;

        connection.on('connection',()=>{
            console.log('MongoDB connected!')
        })

        connection.on('error',(err)=>{
            console.log('MongoDB connection error. Please make sure MongoDB is running.' + err);
            process.exit()
        })

    } catch (error) {
        console.log("Something went wrong!");
        console.log(error)
    }
}