"use server";
import { apiGet } from "@/utils/apiHandler";
import { catchError } from "@/utils/catchError";
// types
import { Outlet } from "@/app/features/home/types/outlet";

export async function getOutlet(menu: string): Promise<{
  message: string;
  status: "success" | "error";
  data?: Outlet;
}> {
  const [error, response] = await catchError(
    apiGet<Outlet>(`/api/shop/outlet/${menu}`),
  );
  if (error) {
    return {
      message: error.message,
      status: "error",
    };
  }
  return {
    message: "Successfully fetched outlet",
    status: "success",
    data: response,
  };
}
