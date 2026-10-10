import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    groupId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'groups',
        required:[true,"id is required"],
        intex:true
    },
    description:{
        type:String,
        required:[true,"description is required"],
    },
    totalAmount:{
        type:Number,
        required:[true,"amount is required"],
        min:[0,"amount cannot be negative"]
    },
    paidBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,"payer id is required"]
    },
    splitType:{
        type:String,
        default:"EQUAL"
    },
    splits: [{
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'user',
          required: true,
        },
        amountOwed: {
          type: Number,
          required: true,
        },
      }]
},{timestamps:true})

const expenseModel = new mongoose.model("expense",expenseSchema)
export default expenseModel