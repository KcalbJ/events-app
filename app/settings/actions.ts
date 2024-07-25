"use server";

import { auth } from "@/auth";
import { UpdateProfileValues, updateProfileSchema } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function updateProfile(values: UpdateProfileValues) {
  const session = await auth();
  const userId = session?.user.id;
  if (!userId) {
    throw Error("Unauthorized");
  }

  const { name } = updateProfileSchema.parse(values);
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });
  revalidatePath("/");
}


export async function createEvent(formData: FormData) {
  const session = await auth();
  const userId = session?.user.id;
  const user = session?.user
  if (user.role !== "admin"){
    throw Error("Unauthariized")
  }
  try {
    await prisma.event.create({
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        date: new Date(formData.get("date") as string),
        location: formData.get("location") as string,
        price: parseFloat(formData.get("price") as string),
        imgUrl: formData.get("imgUrl") as string,
        category: formData.get("category") as string,
        userId: userId as string,
      }
  }) } catch (e) {
  return "An error occured."
}
}