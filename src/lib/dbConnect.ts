import mongoose from "mongoose";
// import { number } from "zod";


type ConnectionObject = {
    isConnected?: number
}

const connections: ConnectionObject = {}

async function dbConnect(): Promise<void> {  
    if (connections.isConnected) {
        console.log("Already Connected to datase");
        return

    }
    try {
        const db = await mongoose.connect(process.env.MONGOSB_URI || '', {})
        connections.isConnected = db.connections[0].readyState
        console.log("Database connected successfully")
    } catch (error) {
        console.log("database connection failed",error)
        process.exit(1)
    }
}
export default dbConnect