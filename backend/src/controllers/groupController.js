import groupModel from "../models/groupsModel.js";

export const creatNewGroup = async (req,res,next) => {
    try {
        const userId = req.user._id;
        
        const { groupName, category, currency } = req.body;
        const existingGroupName = await groupModel.findOne({groupName})

        if(existingGroupName){
            return res.status(400).json({
                success:false,
                message:"You already have a group with this name"
            })
        }

        const newGroup = await groupModel.create({
            groupName: groupName.trim(),
            category: category || "Home",
            currency: currency || "INR",
            createdBy: userId,
        });

        
        return res.status(201).json({
            success: true,
            message: "Group created successfully!",
            group: newGroup,
        });
    } catch (error) {
        next(error)
    }
}

export const allGroups = async (req,res,next)=>{
    try {
        const userId = req.user._id;

        // 2. Sirf wahi groups lao jo is user ne create kiye hain
        const groups = await groupModel.find({ createdBy: userId })
            .sort({ updatedAt: -1, createdAt: -1 })

        return res.status(200).json({
            success: true,
            count: groups.length,
            groups,
        });
    } catch (error) {
        next(error)
    }
}