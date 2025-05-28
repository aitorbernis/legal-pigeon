export interface Property {
  id: string;
  title: string;
  address: string;
  price: number;
}

export type CreateProperty = Omit<Property, "id">;
