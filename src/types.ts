export interface Product {
  id: string;
  name: string;
  price: string;
  img: string;
  category: 'flowers' | 'cakes' | 'gifts' | 'events';
  description?: string;
  tag?: string;
}

export type ViewState = 'home' | 'collection';
