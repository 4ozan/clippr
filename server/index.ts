import * as mongoose from 'mongoose'
import { user } from "./schema"


await mongoose.connect("mongodb://localhost:27017/")
.then(() => {
    console.log("mongo db connected")
})
.catch(err => {
 console.log("db disconnected")
})

