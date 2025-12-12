import { Code2, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B35] flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl text-white">CodeStart</span>
          </Link>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/kursy" className="text-white/80 hover:text-white transition-colors">
              Kursy
            </Link>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              O platformie
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Cennik
            </a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">
              Kontakt
            </a>
          </div>
          
          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="hidden md:inline-flex text-white hover:bg-white/5"
            >
              Zaloguj się
            </Button>
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              Dołącz teraz
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden text-white hover:bg-white/5"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}