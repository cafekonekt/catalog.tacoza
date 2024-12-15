"use server";
import { apiGet } from "@/utils/apiHandler";
import { catchError } from "@/utils/catchError";

interface Outlet {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  latitude: number;
  longitude: number;
  opening_time: string;
  closing_time: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

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
