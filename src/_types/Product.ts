export interface Products {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Product[];
  support: Support;
}

export interface Product {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface Support {
  url: string;
  text: string;
}
