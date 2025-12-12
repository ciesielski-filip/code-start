import { Button } from "./ui/button";
import { Code, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 md:py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FF6B35]/10 via-transparent to-transparent pointer-events-none" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF6B35]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
          <Sparkles className="w-4 h-4 text-[#FF6B35]" />
          <span className="text-sm text-white/80">Platforma e-learningowa</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl text-white tracking-tight">
          Naucz się tworzyć
          <span className="block text-[#FF6B35]">strony internetowe</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
          Kompleksowa platforma do nauki programowania. Od podstaw HTML i CSS, przez JavaScript, aż po nowoczesne frameworki.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link to="/kursy">
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8">
              Rozpocznij naukę
            </Button>
          </Link>
          <Link to="/kursy">
            <Button
              size="lg"
              variant="outline"
              className="glass border-white/20 text-white hover:bg-white/5"
            >
              <Code className="w-4 h-4 mr-2" />
              Zobacz kursy
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 pt-12 max-w-2xl mx-auto">
          <div className="glass-orange rounded-2xl p-6">
            <div className="text-3xl text-[#FF6B35]">50+</div>
            <div className="text-sm text-white/60 mt-1">Lekcji</div>
          </div>
          <div className="glass-orange rounded-2xl p-6">
            <div className="text-3xl text-[#FF6B35]">1000+</div>
            <div className="text-sm text-white/60 mt-1">Ćwiczeń</div>
          </div>
          <div className="glass-orange rounded-2xl p-6">
            <div className="text-3xl text-[#FF6B35]">24/7</div>
            <div className="text-sm text-white/60 mt-1">Wsparcie</div>
          </div>
        </div>
      </div>
    </section>
  );
}
