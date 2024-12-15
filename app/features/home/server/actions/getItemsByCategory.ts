"use server";
import { apiGet } from "@/utils/apiHandler";
import { catchError } from "@/utils/catchError";
// types
import { FoodItem } from "@/app/features/home/types/menu";

export async function getItemsByCategory(slug: string): Promise<{
  message: string;
  status: "success" | "error";
  data?: FoodItem[];
}> {
  const [error, response] = await catchError(
    apiGet<FoodItem[]>(`/api/shop/food-items-category/${slug}`),
  );
  if (error) {
    return {
      message: error.message,
      status: "error",
    };
  }
  return {
    message: "Successfully fetched menu",
    status: "success",
    data: response,
  };
}
