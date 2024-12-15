'use client'
import { redirect } from 'next/navigation'
// types
import { Category } from "@/app/features/home/types/menu";
import Image from "next/image";

export function CategoryView({ category, slug }: { category: Category, slug: string }) {
  const handleClick = () => {
    redirect(`/${slug}/${category.slug}`);
  }
  
  return (
    <div className="relative h-40 w-full my-2 bg-gradient-to-r from-amber-800/30 via-amber-100/30 to-amber-50/30 rounded-lg border"
      onClick={handleClick}
    >
      <h1 className="text-white text-lg font-bold p-4">{category.name}</h1>
      <Image
        src={`${category.image_url}`}
        alt={`${category.name}`}
        width={100}
        height={100}
        className="h-28 w-full object-cover rounded-lg"
      />
    </div>
  );
}
