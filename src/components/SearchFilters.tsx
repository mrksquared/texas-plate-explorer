
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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

  const handleCharacterLengthChange = (value: string) => {
    onFiltersChange({ ...filters, characterLength: value });
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-primary" />
        <h2 className="text-xl font-inter font-semibold text-primary">Search & Filter</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
        <Select value={filters.characterLength} onValueChange={handleCharacterLengthChange}>
          <SelectTrigger>
            <SelectValue placeholder="Character length" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">All Lengths</SelectItem>
            <SelectItem value="1-3">1-3 characters</SelectItem>
            <SelectItem value="4-5">4-5 characters</SelectItem>
            <SelectItem value="6-7">6-7 characters</SelectItem>
            <SelectItem value="8">8 characters</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
