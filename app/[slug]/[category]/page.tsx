import { Button } from "@/components/ui/button";
import { Cake, ChevronLeft } from "lucide-react";
import { Item } from "@/app/features/home/components/item";
// server actions
import { getOutlet } from "@/app/features/home/server/actions/getOutlet";
import { getItemsByCategory } from "@/app/features/home/server/actions/getItemsByCategory";

export default async function Page({
  params,
}: {
  params: { slug: string; category: string };
}) {
  const { slug, category } = await params;
  const outlet = await getOutlet(slug);
  const items = await getItemsByCategory(category);
  console.log(items);
  return (
    <main className="min-h-screen bg-amber-50 overflow-scroll">
      <div className="w-full flex items-center gap-2 py-2 px-4 bg-white border-b">
        <Button variant="outline" className="h-8 aspect-square rounded-full">
          <ChevronLeft size={24} />
        </Button>
        <div className="leading-none">
          <h1 className="font-bold">{outlet.data?.name}</h1>
          <p className="text-sm">{slug}</p>
        </div>
      </div>
      <Button className="m-2 text-white bg-amber-950">
        <Cake /> Make your Customized Cake
      </Button>
      <div className="grid grid-cols-2 gap-2 p-2">
        {items.data
          ?.filter((item) => item.in_stock)
          .map((item, key) => <Item key={key} item={item} />)}
      </div>
    </main>
  );
}
