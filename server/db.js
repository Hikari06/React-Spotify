import mongoose from "mongoose";

export default async function conectDb(){
    mongoose.connect("mongodb+srv://hikari-ch:hikari@cluster0.ayef5.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection
}