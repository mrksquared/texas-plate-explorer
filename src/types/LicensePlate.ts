
export interface LicensePlate {
  id: string;
  plateNumber: string;
  category: string;
  description: string;
  price: number;
  isAvailable: boolean;
  image?: string;
  tags: string[];
}

export interface SearchFilters {
  category: string;
  priceRange: [number, number];
  availability: 'all' | 'available' | 'unavailable';
  searchTerm: string;
  characterLength: 'all' | '1-4' | '5-7' | '8+';
}
