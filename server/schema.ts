import * as mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        name:{type:String ,required:true},
        email:{type: String, required:true, unique:true},
        password:{type: String, required:true},
        createdAt:{ type:Date, default:Date.now()}
}
    

)

export type User = mongoose.InferSchemaType< typeof userSchema>;
export const User = mongoose.model("User", userSchema)
