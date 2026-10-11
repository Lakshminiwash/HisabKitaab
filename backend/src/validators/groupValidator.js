const { z } = require('zod');

export const createGroupSchema = z.object({
    body: z.object({
        name: z.string().trim().min(2, 'minimum 2 characters are required'),
        description: z.string().trim().optional(),
        category: z.enum(['Trip', 'Home', 'Couple', 'Event', 'Other']).optional().default('Home'),
        members: z.array(z.string().trim()).min(1, 'at least one member are compulsory'),
    }),
});

export const addMemberSchema = z.object({
    body: z.object({
        email: z.string().trim().toLowerCase().email('please enter valid email address'),
    }),
});

