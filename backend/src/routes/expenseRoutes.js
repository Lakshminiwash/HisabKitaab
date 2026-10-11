import { Router } from "express";
import { validateAuth } from "../validators/authValidator";
import { expenseSchema } from "../validators/expenseValidator";

const router = Router();

// for add new expense in the group 
// api/expense/add 
router.post("/add",validateAuth(expenseSchema))

// for fetch all history of single group 
// api/expense/:groupId
router.get("/:groupId",)

// for fetch the net balence of group member 
// api/expense/balances/:groupId
router.get("/balances/:groupId",)

export default router