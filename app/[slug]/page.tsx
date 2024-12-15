// components
import { Button } from "@/components/ui/button";
import { OutletInfo } from "@/app/features/home/components/outletInfo";
import { Category } from "@/app/features/home/components/category";
// icons
import { Cake } from "lucide-react";
import { getOutlet } from "@/app/features/home/server/actions/getOutlet";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await getOutlet(slug);
  console.log(response);

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
