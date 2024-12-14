import { Button } from "@/components/ui/button";
import { OutletInfo } from "./components/outletInfo";
import { Category } from "./components/category";
import { Cake } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-amber-50 text-yellow-950 w-full p-4 overflow-scroll">
      <div>
        <h1>Home</h1>
      </div>
      <div>
        <OutletInfo />
        <Button className="w-full my-4 text-white bg-amber-950">
          <Cake /> Make your Customized Cake
        </Button>
        <Category />
      </div>
    </main>
  );
}
