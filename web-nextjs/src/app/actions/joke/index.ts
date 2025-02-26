"use server";

import JokeService from "@src/services/JokeService";

export async function createJoke(formData: FormData) {
  try {
    const joke = formData.get("joke") as string;
    await JokeService.createJoke({ joke });
  } catch (error) {
    console.error(error);
    return { error: error || "Something went wrong" };
  }
}
