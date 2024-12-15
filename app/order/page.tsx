import { Button } from "@/components/ui/button";
import { ChevronLeft, ShoppingCart } from "lucide-react";
import { SelectOptions } from "./components/select";

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
      <section className="p-2">
        <img
          src="https://gallerypng.com/wp-content/uploads/2024/07/chocolate-birthday-cake-png-image.png"
          className="h-40"
        />
        <span>Dark Choclate Cake</span>
        <SelectOptions />
      </section>
      <Button className="m-2 text-white bg-amber-950">
        <ShoppingCart /> Add to Cart
      </Button>
    </main>
  );
}
