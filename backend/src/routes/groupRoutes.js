import { Router } from "express";
import { validateAuth } from "../validators/authValidator.js";
import { addMemberSchema, createGroupSchema } from "../validators/groupValidator.js";

const router = Router();

// for create new group 
// api/group/create 
router.post("/create",validateAuth(createGroupSchema))
router.post("/inviteMember",validateAuth(addMemberSchema))

// for fetch all group of the logged in user 
// api/group/my-groups 
router.get("/my-groups",)

// for fetch the specific detail of single group 
// api/group/:groupId
router.get("/:groupId",)

// Dynamic Invite Token ke zariye group me auto-join hone ke liye.
// api/group/join 
router.post("/join",)

export default router