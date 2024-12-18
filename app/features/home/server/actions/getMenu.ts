"use server";
import { apiGet } from "@/utils/apiHandler";
import { catchError } from "@/utils/catchError";
// types
import { Category } from "@/app/features/home/types/menu";

export async function getMenu(menu: string): Promise<{
  message: string;
  status: "success" | "error";
  data?: Category[];
}> {
  const [error, response] = await catchError(apiGet<Category[]>(`/api/shop/menu/${menu}`));
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
