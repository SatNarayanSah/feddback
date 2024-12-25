import { z } from "zod";


export const usernameValidation = z
.string()
.min(2, "Username must be at least 2 characters")
.min(2, "Username must be no more than 15 characters")
.regex(/^[a-zA-Z0-9_] +$/, "Username must not contain special character")