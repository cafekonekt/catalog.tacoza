// components
import { Button } from "@/components/ui/button";
import { OutletInfo } from "@/app/features/home/components/outletInfo";
import { CategoryView } from "@/app/features/home/components/category";
// icons
import { Cake } from "lucide-react";
// server actions
import { getOutlet } from "@/app/features/home/server/actions/getOutlet";
import { getMenu } from "@/app/features/home/server/actions/getMenu";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const response = await getOutlet(slug);
  const menu = await getMenu(slug);
  console.log(menu);
  return (
    <main className="min-h-screen bg-amber-50 text-yellow-950 w-full p-4 overflow-scroll">
      <div>
        <h1>Home</h1>
      </div>
      <div>
        {response?.data && <OutletInfo outlet={response.data} />}
        <Button className="w-full my-4 text-white bg-amber-950">
          <Cake /> Make your Customized Cake
        </Button>
        {menu?.data
          ?.filter((category) => category.active)
          .map((category, key) => <CategoryView category={category} key={key} slug={slug} />)}
      </div>
    </main>
  );
}
