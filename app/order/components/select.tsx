import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function SelectOptions() {
  return (
    <div className="w-full p-2 bg-amber-300 rounded-xl">
      <ToggleGroup className="w-full flex flex-col items-start" type="single">
        <p className="text-sm">Select Size</p>
        <ToggleGroupItem value="a" asChild>
          <div className="w-full flex justify-between">
            <span>2 Pounds</span>
            <Button className="ml-auto h-6 bg-amber-950">₹899</Button>
          </div>
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}
