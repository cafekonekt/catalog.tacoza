import { Button } from "@/components/ui/button";
import { FoodItem } from "@/app/features/home/types/menu";
import Image from "next/image";


export function Item({ item }: { item: FoodItem }) {
  return (
    <div className="flex flex-col items-center p-2 bg-orange-200/70 border rounded-xl">
      <Image
        src={`${item.image_url}`}
        alt={`${item.name}`}
        width={100}
        height={100}
        className="h-32"
      />
      <p className="text-sm font-bold">{ item.name }</p>

      <Button className="w-full rounded-full bg-amber-950">₹ { item.price }</Button>
      <p className="text-xs opacity-40">Customizable</p>
    </div>
  );
}
