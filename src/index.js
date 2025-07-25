// import mongoose from "mongoose" 
// import { DB_NAME } from "./constants"
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path:'./env'
})
connectDB()

.then(()=>{
    application.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port :${process.env.PORT}`);
    })
})
.catch(()=>{
    console.log("MONGO db connection failed !!!", err);
    
})


// import express from "express"
// const app = express()
// ( async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
//         app.on("error",()=>{
//             console.log("ERRR:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,() =>{
//             console.log(`App id listening on port ${process.env.PORT}`);
//         })
//     }catch(error){
//         console.error("ERROR",error)
//         throw err
//     };
// })()