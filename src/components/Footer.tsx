import { Code2, Github, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#FF6B35] flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl text-white">CodeStart</span>
            </div>
            <p className="text-white/60 text-sm">
              Twoja droga do kariery w web developmencie.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white mb-4">Platforma</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><Link to="/kursy" className="hover:text-white transition-colors">Kursy</Link></li>
              <li><Link to="/kursy" className="hover:text-white transition-colors">Ścieżki nauki</Link></li>
              <li><Link to="/kursy" className="hover:text-white transition-colors">Certyfikaty</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Firma</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">O nas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kariera</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Polityka prywatności</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Społeczność</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Forum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            © 2025 CodeLearn. Wszystkie prawa zastrzeżone.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/60 hover:text-[#FF6B35] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#FF6B35] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-[#FF6B35] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
