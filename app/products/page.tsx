import { Button } from "@/components/ui/button";
import { Cake, ChevronLeft } from "lucide-react";
import { Item } from "./components/item";

export default function Page() {
  return (
    <main className="min-h-screen bg-amber-50 overflow-scroll">
      <div className="w-full flex items-center gap-2 py-2 px-4 bg-white border-b">
        <Button variant="outline" className="h-8 aspect-square rounded-full">
          <ChevronLeft size={24} />
        </Button>
        <div className="leading-none">
          <h1 className="font-bold">Baker Cakes</h1>
          <p className="text-sm">Tacoza Bakery</p>
        </div>
      </div>
      <Button className="m-2 text-white bg-amber-950">
        <Cake /> Make your Customized Cake
      </Button>
      <div className="grid grid-cols-2 gap-2 p-2">
        <Item />
      </div>
    </main>
  );
}
