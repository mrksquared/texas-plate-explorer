
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LicensePlate } from "../types/LicensePlate";

interface LicensePlateCardProps {
  plate: LicensePlate;
}

export function LicensePlateCard({ plate }: LicensePlateCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-dark-blue border-0 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start mb-2">
          <Badge 
            variant={plate.isAvailable ? "default" : "destructive"}
            className={plate.isAvailable ? "bg-mint text-primary" : ""}
          >
            {plate.isAvailable ? "Available" : "Unavailable"}
          </Badge>
          <span className="text-2xl font-bold text-white">${plate.price.toLocaleString()}</span>
        </div>
        
        {/* License Plate Preview */}
        <div className="bg-gradient-to-r from-coral to-purple p-4 rounded-lg mb-4">
          <div className="bg-white rounded-md p-3 text-center">
            <div className="text-xs text-muted-foreground mb-1">TEXAS</div>
            <div className="text-xl font-bold text-primary tracking-wider">{plate.plateNumber}</div>
            <div className="text-xs text-muted-foreground mt-1">THE LONE STAR STATE</div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <h3 className="font-semibold text-lg text-white mb-2">{plate.plateNumber}</h3>
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">{plate.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-4">
          {plate.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs border-white/30 text-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Button 
          className={`w-full ${plate.isAvailable 
            ? 'bg-gradient-to-r from-coral to-purple hover:from-purple hover:to-coral' 
            : 'bg-gray-600 text-gray-400 cursor-not-allowed'
          }`}
          disabled={!plate.isAvailable}
        >
          {plate.isAvailable ? "Learn More" : "Not Available"}
        </Button>
      </CardContent>
    </Card>
  );
}
