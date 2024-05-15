import zod from "zod";

// signup user
export const signupInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6),
})

// create post
export const createBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
})

// update post
export const updateBlogInput = zod.object({
    title: zod.string(),
    content: zod.string(),
    id: zod.string()
})

// type inference in zod
export type SignupInput = zod.infer<typeof signupInput>
export type SigninInput = zod.infer<typeof signupInput>
export type CreateBlogInput = zod.infer<typeof createBlogInput>
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>