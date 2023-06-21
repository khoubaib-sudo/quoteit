import mongoose from 'mongoose'

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
    
    if(isConnected) {
        console.log('MongoDB is alredy connected');
        return;
    }
    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_quotes",
            useNewUrlParser: true,
            useUnifiedToplogy: true,
        })
        isConnected = true;
        console.log("mongodb connected")
    } catch (error) {
        console.log(error);
    }
}