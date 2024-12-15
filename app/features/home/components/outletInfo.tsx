import { MapPin } from "lucide-react";
import { Outlet } from "@/app/features/home/types/outlet";

export function OutletInfo({ outlet }: { outlet: Outlet }) {
  return (
    <div>
      <img
        src="https://img.freepik.com/premium-photo/assorted-fancy-cakes-shop-window-cafe_267929-725.jpg"
        alt="Outlet Image"
        className="h-40 w-full object-cover rounded-lg"
      />
      <h1 className="text-lg font-bold">{ outlet.name }</h1>
      <p className="text-sm">{ outlet.description }</p>
      <span className="text-sm flex">
        <MapPin size={20} /> { outlet.location }
      </span>
    </div>
  );
}
