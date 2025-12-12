import { Code2, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Navbar Background & Border */}
      <div className="absolute inset-0 glass border-b border-white/10 z-20" />

      {/* Navbar Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 py-4">
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
          <div className="flex items-center gap-4 relative z-50">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-white hover:bg-white/5"
            >
              Zaloguj się
            </Button>
            <Button className="hidden md:inline-flex bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              Dołącz teraz
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/5"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden absolute top-0 left-0 right-0 z-10 glass pt-24 pb-24 px-6 flex flex-col gap-6 shadow-2xl transition-all duration-500 ease-in-out"
        style={{
          transform: isOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div className="flex flex-col gap-4">
          <Link
            to="/kursy"
            className="text-lg text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Kursy
          </Link>
          <a
            href="#"
            className="text-lg text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            O platformie
          </a>
          <a
            href="#"
            className="text-lg text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Cennik
          </a>
          <a
            href="#"
            className="text-lg text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Kontakt
          </a>
        </div>

        <div className="flex flex-col gap-3 p-5 border-t border-white/10">
          <Button
            variant="ghost"
            className="w-full text-white hover:bg-white/5 justify-start"
          >
            Zaloguj się
          </Button>
          <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white justify-start">
            Dołącz teraz
          </Button>
        </div>
      </div>
    </nav>
  );
}