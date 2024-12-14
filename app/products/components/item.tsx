import { Button } from "@/components/ui/button";

export function Item() {
  return (
    <div className="flex flex-col items-center p-2 bg-orange-200/70 border rounded-xl">
      <img
        src="https://gallerypng.com/wp-content/uploads/2024/07/chocolate-birthday-cake-png-image.png"
        className="h-32"
      />
      <p className="text-sm font-bold">Chocolate Cake</p>

      <Button className="w-full rounded-full bg-amber-950">₹899</Button>
      <p className="text-xs opacity-40">Customizable</p>
    </div>
  );
}
