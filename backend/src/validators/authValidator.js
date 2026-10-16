import { z } from "zod";

export const registerSchema = z.object({
    body: z.object({
        userName: z.string().min(3, "minimum 3 characters required in name").max(35, "maximum 35 characters"),
        email: z.string().trim().toLowerCase().email("please enter valid email id"),
        password: z.string().min(8, "password must be atleast 8 char.").max(15, "password cannot exeed 15 char"),
        contact: z.string().regex(/^[6-9]\d{9}$/, "Invalid phone number").optional().or(z.literal(''))
    })
});

export const loginSchema = z.object({
    body: z.object({
        email: z.string().trim().toLowerCase().email("email id is invalid"),
        password: z.string().min(8, "invalid password")
    })
});

export const validateAuth = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync({
                body: req.body,
                query: req.query,
                params: req.params
            });
            return next();
        } catch (error) {
            // Check karo ki error Zod error hai ya nahi
            if (error instanceof z.ZodError) {
                return res.status(400).json({
                    success: false,
                    // Zod errors ke liye 'error.issues' use hota hai
                    errors: error.issues.map((err) => ({
                        field: err.path.join('.'),
                        message: err.message,
                    }))
                });
            }
            
            // Agar koi aur unexpected error hai
            return res.status(500).json({
                success: false,
                message: error.message || "Internal Server Error"
            });
        }
    };
};