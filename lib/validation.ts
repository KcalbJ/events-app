import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

// export const createEventSchema = z.object({
//   name: z.string().trim().min(1, "Name cannot be empty"),
//   description: z.string().trim().min(1, "Description cannot be empty"),
//   date: z.string().refine((date) => !isNaN(Date.parse(date)), {
//     message: "Invalid date format",
//   }),
//   location: z.string().trim().min(1, "Location cannot be empty"),
//   price: z.string().refine((price) => !isNaN(parseFloat(price)), {
//     message: "Invalid price format",
//   }),
//   imgUrl: z.string().url("Invalid URL format"),
//   category: z.string().trim().min(1, "Category cannot be empty"),
// });

// export type CreateEventValues = z.infer<typeof createEventSchema>;