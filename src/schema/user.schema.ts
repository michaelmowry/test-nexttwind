import z from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const registerUserSchema = loginSchema.extend({
  name: z.string().min(1).max(32),
  image: z.string().optional(),
});

export const userSchema = z.object({
  name: z.string().min(1).max(32),
  email: z.string().email(),
  image: z.string().optional(),
});

export const activateUserSchema = z.object({
  id: z.string(),
});

export type IRegisterUser = z.infer<typeof registerUserSchema>;
export type ILogin = z.infer<typeof loginSchema>;
export type IUser = z.infer<typeof userSchema>;
export type IActivateUser = z.infer<typeof activateUserSchema>;
