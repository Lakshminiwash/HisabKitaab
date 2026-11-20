import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
    groupName: {
        type: String,
        required: [true, "groupname is required"],
        trim: true
    },
    category: {
        type: String,
        enum: ['Trip', 'Home', 'Dining', 'Event'],
        default: "Home",
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    currency: {
        type: String,
        default: "INR",
    },
}, { timestamps: true })

const groupModel = new mongoose.model("groups", groupSchema)
export default groupModel;