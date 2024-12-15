export interface Shop {
  id: number;
  logo_url: string;
  name: string;
  owner: string;
  created_at: string;
  updated_at: string;
}

export interface Outlet {
  address: string;
  average_prep_time: number;
  description: string;
  email: string;
  gallery: Array<string>;
  id: number;
  location: string;
  logo: string;
  menu_slug: string;  
  minimum_order_value: number;
  name: string;
  payment_link: string;
  payment_methods: Array<string>;
  phone: string;
  rating: number;
  services: Array<string>;
  shop: Shop;
  type: Array<string>;
  whatsapp: string;
  city: string;
  state: string;
  opening_time: string;
  closing_time: string;
}
