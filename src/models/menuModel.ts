export interface Menu {
  categories: Categories[];
  products: ProductData[];
}

export interface Categories {
  id: number;
  name: string;
  image_url: string;
  day_shift: DayShift;
}

export interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category_id: number;
  day_shift: DayShift;
}

export enum DayShift {
  DAY = "DAY",
  NIGHT = "NIGHT",
  ALL = "ALL",
}
