import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    groupId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'groups',
        required:[true,"groupId is required"],
        index:true
    },
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,"sender id is required"]
    },
    message:{
        type:String,
        required:[true,"text is required"],
    },

},{timestamps:true})

const messageModel = new mongoose.model("chats",messageSchema)
export default messageModel