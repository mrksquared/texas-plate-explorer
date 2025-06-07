
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchFilters } from "../components/SearchFilters";
import { LicensePlateCard } from "../components/LicensePlateCard";
import { licensePlates } from "../data/licensePlates";
import { SearchFilters as SearchFiltersType } from "../types/LicensePlate";
import { Search } from "lucide-react";

const Index = () => {
  const [filters, setFilters] = useState<SearchFiltersType>({
    category: 'All Categories',
    priceRange: [0, 5000],
    availability: 'all',
    searchTerm: '',
    characterLength: [8, 1]
  });

  const filteredPlates = useMemo(() => {
    return licensePlates.filter(plate => {
      // Search term filter
      if (filters.searchTerm && !plate.plateNumber.toLowerCase().includes(filters.searchTerm.toLowerCase()) && 
          !plate.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
          !plate.tags.some(tag => tag.toLowerCase().includes(filters.searchTerm.toLowerCase()))) {
        return false;
      }

      // Category filter
      if (filters.category !== 'All Categories' && plate.category !== filters.category) {
        return false;
      }

      // Character length filter
      const plateLength = plate.plateNumber.length;
      if (plateLength < filters.characterLength[0] || plateLength > filters.characterLength[1]) {
        return false;
      }

      // Price range filter
      if (plate.price < filters.priceRange[0] || plate.price > filters.priceRange[1]) {
        return false;
      }

      // Availability filter
      if (filters.availability === 'available' && !plate.isAvailable) {
        return false;
      }
      if (filters.availability === 'unavailable' && plate.isAvailable) {
        return false;
      }

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-cream relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 blob-coral rounded-full opacity-60 -translate-x-1/2 -translate-y-1/2 animate-float"></div>
      <div className="absolute top-20 right-0 w-64 h-64 blob-purple rounded-full opacity-60 translate-x-1/3 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 blob-mint rounded-full opacity-60 animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-0 right-20 w-80 h-80 blob-sky rounded-full opacity-60 translate-y-1/3 animate-float" style={{animationDelay: '1s'}}></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-primary mb-4 leading-tight">
              EVERY CAR DESERVES A FUN LICENSE PLATE.
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8">
              FIND YOURS HERE
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full font-semibold"
              >
                Start Browsing
              </Button>
              <div className="text-xl font-bold text-primary">OR</div>
              <div className="relative flex-1 min-w-64">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search for plates"
                  value={filters.searchTerm}
                  onChange={(e) => setFilters({...filters, searchTerm: e.target.value})}
                  className="pl-12 py-6 text-lg rounded-full border-2 border-muted"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="container mx-auto px-4">
          <SearchFilters filters={filters} onFiltersChange={setFilters} />
        </div>

        {/* Results Section */}
        <div className="container mx-auto px-4 pb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-primary">
              {filteredPlates.length} License Plates Found
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlates.map((plate) => (
              <LicensePlateCard key={plate.id} plate={plate} />
            ))}
          </div>

          {filteredPlates.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-primary mb-2">No plates found</h3>
              <p className="text-muted-foreground">Try adjusting your search filters to find more results.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
