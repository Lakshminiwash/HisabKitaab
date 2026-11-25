import mongoose from "mongoose";

const tokenBlacklistSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true,
    },
    expiresAt: {
        type: Date,
        required: true,
        index: { expires: 0 }, // Jab expiresAt ka time aayega, MongoDB auto-delete kar dega
    },
});

const tokenBlackListModel = mongoose.model('BlacklistedToken', tokenBlacklistSchema);
export default tokenBlackListModel;