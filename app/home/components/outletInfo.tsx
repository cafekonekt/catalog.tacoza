import { MapPin } from "lucide-react";

export function OutletInfo() {
  return (
    <div>
      <img
        src="https://img.freepik.com/premium-photo/assorted-fancy-cakes-shop-window-cafe_267929-725.jpg"
        alt="Outlet Image"
        className="h-40 w-full object-cover rounded-lg"
      />
      <h1 className="text-lg font-bold">Outlet Name</h1>
      <p className="text-sm">Outlet Description</p>
      <span className="text-sm flex">
        <MapPin size={20} /> Outlet Description
      </span>
    </div>
  );
}
