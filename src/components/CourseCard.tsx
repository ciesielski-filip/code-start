import { Clock, Users, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: string;
  image: string;
}

export function CourseCard({ id, title, description, level, duration, students, image }: CourseCardProps) {
  return (
    <div className="glass rounded-2xl overflow-hidden hover:border-[#FF6B35]/40 transition-all duration-300 group flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#FF6B35]/20 to-transparent">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 rounded-full glass-orange text-[#FF6B35] text-sm">
            {level}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1 space-y-4">
          <h3 className="text-white">{title}</h3>
          <p className="text-white/60">{description}</p>
          
          {/* Stats */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Clock className="w-4 h-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Users className="w-4 h-4" />
              <span>{students}</span>
            </div>
          </div>
        </div>
        
        {/* Action */}
        <Link to={`/kursy/${id}`} className="mt-4">
          <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
            Zobacz kurs
          </Button>
        </Link>
      </div>
    </div>
  );
}