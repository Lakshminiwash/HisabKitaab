import {z} from "zod"

export const expenseSchema = z.object({
    body: z.object({
        groupId: z.string().trim().min(1, 'Group ID is compalsary'),
        description: z.string().min(3, 'Expense description is mandatory'),
        totalAmount: z.number().positive('amount can not be negative'),
        paidBy: z.string().min(1, 'Payer ID is mandatory'),
        splitType: z.enum(['EQUAL', 'EXACT', 'PERCENTAGE']).optional().default('EQUAL'),
        splits: z.array(
            z.object({
                userId: z.string().trim().min(1, 'Split user ID zaroori hai'),
                amountOwed: z.number().min(0, 'Amount owed negative nahi ho sakta'),
            })
        ).min(1, 'Kam se kam ek split hona zaroori hai'),
    }),
});

