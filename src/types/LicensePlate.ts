
export interface LicensePlate {
  id: string;
  plateNumber: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
}

export interface SearchFilters {
  category: string;
  availability: 'all' | 'available' | 'unavailable';
  searchTerm: string;
  characterLength: string;
}
