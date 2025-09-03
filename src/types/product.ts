export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  image: string;
  category: string;
  inStock: boolean;
  createdAt: Date;
}

export interface User {
  uid: string;
  email: string;
  role: 'admin' | 'user';
}