export interface FoodItem {
  id: number;
  description: string;
  featured: boolean;
  food_category: string;
  food_subcategory: string;
  food_type: string;
  image_url: string;
  in_stock: boolean;
  name: string;
  prepration_time: number;
  price: string;
  rating: number;
  slug: string;
  steps: number;
}

export interface Category {
  id: number;
  name: string;
  active: boolean;
  image_url: string;
  slug: string;
  subcategories: Category[];
  food_items: FoodItem[];
}
