import mongoose from "mongoose";
import { DB_URL } from "../config/envConfig";

export default async () => {
    try {
        await mongoose.connect(String(DB_URL).trim())
        console.log('🍃🍃🍃server connected to the database 🍃🍃🍃')
    } catch (error: any) {
        console.log('⛔⛔⛔failed to connect server to  database⛔⛔⛔')
        console.log(error)
        process.exit(1)
    }
}