import {z} from "zod";

export const createGroupSchema = z.object({
    body: z.object({
        groupName: z.string().trim().min(2, 'minimum 2 characters are required'),
        category: z.enum(['Trip', 'Home', 'Dining', 'Event']).optional().default('Home'),
        currency: z.enum(['INR', 'USD', 'EUR']).optional().default('INR'),
    }),
});

export const addMemberSchema = z.object({
    body: z.object({
        email: z.string().trim().toLowerCase().email('please enter valid email address'),
    }),
});

