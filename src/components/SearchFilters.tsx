
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { SearchFilters as SearchFiltersType } from "../types/LicensePlate";
import { categories } from "../data/licensePlates";
import { Search, Filter } from "lucide-react";

interface SearchFiltersProps {
  filters: SearchFiltersType;
  onFiltersChange: (filters: SearchFiltersType) => void;
}

export function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
  const handleSearchChange = (value: string) => {
    onFiltersChange({ ...filters, searchTerm: value });
  };

  const handleCategoryChange = (value: string) => {
    onFiltersChange({ ...filters, category: value });
  };

  const handleAvailabilityChange = (value: string) => {
    onFiltersChange({ ...filters, availability: value as 'all' | 'available' | 'unavailable' });
  };

  const handleCharacterLengthChange = (value: number[]) => {
    onFiltersChange({ ...filters, characterLength: [value[0], value[1]] });
  };

  const handlePriceRangeChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-bold text-primary">Search & Filter</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search for plates..."
            value={filters.searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Category Filter */}
        <Select value={filters.category} onValueChange={handleCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Character Length Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-primary">
            Character Length: {filters.characterLength[0]} - {filters.characterLength[1]}
          </label>
          <Slider
            value={filters.characterLength}
            onValueChange={handleCharacterLengthChange}
            max={1}
            min={8}
            step={1}
            className="w-full"
          />
        </div>

        {/* Availability Filter */}
        <Select value={filters.availability} onValueChange={handleAvailabilityChange}>
          <SelectTrigger>
            <SelectValue placeholder="Availability" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">All Plates</SelectItem>
            <SelectItem value="available">Available Only</SelectItem>
            <SelectItem value="unavailable">Unavailable Only</SelectItem>
          </SelectContent>
        </Select>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-primary">
            Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
          </label>
          <Slider
            value={filters.priceRange}
            onValueChange={handlePriceRangeChange}
            max={5000}
            min={0}
            step={100}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
