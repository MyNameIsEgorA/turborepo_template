import { z } from 'zod'

export const PasswordSchema = z
	.string()
	.min(8, { message: 'Password must be 8 characters or more' })
	.max(20, { message: "Password's length must be less 20" })

export const UserLoginSchema = z.object({
	email: z.string().email(),
	password: PasswordSchema,
})

export const UserRegisterSchema = z.object({
	email: z.string().email(),
	password: PasswordSchema,
	firstName: z.string().min(2).max(20),
	lastName: z.string().min(2).max(20),
})

export type UserLoginDTO = z.infer<typeof UserLoginSchema>
export type UserRegisterDTO = z.infer<typeof UserRegisterSchema>
