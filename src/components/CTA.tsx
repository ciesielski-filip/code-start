import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass-orange rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          {/* Decorative blur */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B35]/30 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl text-white mb-4">
              Gotowy aby zacząć?
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
              Dołącz do tysięcy uczniów, którzy już rozwijają swoje umiejętności programistyczne.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8">
                Rozpocznij za darmo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/10"
              >
                Skontaktuj się z nami
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
