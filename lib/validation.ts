import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(1, "Cannot be empty"),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;

export const createEventSchema = z.object({
  name: z.string().trim().min(3, "Name cannot be empty"),
  description: z.string().trim().min(3, "Description cannot be empty").max(400, "Description mus be less than 400 characters"),
  startDateTime: z.date(),
  endDateTime: z.date(),
  location: z.string().trim().min(3, "Location cannot be empty").max(400, "Location cannot be more than than 400 characters"),
  price: z.coerce.number(),
  imgUrl: z.string().url("Invalid URL format"),
  isFree: z.boolean(),
  category: z.string().trim().min(3, "Category cannot be empty"),
});

export type CreateEventValues = z.infer<typeof createEventSchema>;




export const createOrderSchema = z.object({
  stripeId: z.string(),
  eventId: z.string(),
  buyerId: z.string(),
  totalAmount: z.coerce.number(),
});

export type CreateOrderValues = z.infer<typeof createOrderSchema>;