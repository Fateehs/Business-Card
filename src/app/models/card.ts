export interface Card {
  name?: string;
  title: string;
  phone: string;
  email?: string;
  address?: {
    city: string;
    street: string;
  };
  website?: string;
}
