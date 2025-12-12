import { BookOpen, Code2, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Kursy od podstaw",
    description: "Zaczynamy od podstaw - HTML, CSS, i JavaScript. Każdy może się nauczyć.",
  },
  {
    icon: Code2,
    title: "Praktyczne projekty",
    description: "Ucz się przez tworzenie prawdziwych aplikacji i stron internetowych.",
  },
  {
    icon: Rocket,
    title: "Nowoczesne technologie",
    description: "React, TypeScript, Tailwind CSS - poznaj narzędzia używane przez profesjonalistów.",
  },
  {
    icon: Users,
    title: "Społeczność",
    description: "Dołącz do społeczności programistów. Ucz się razem z innymi.",
  },
];

export function Features() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Dlaczego warto?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Wszystko czego potrzebujesz, aby rozpocząć karierę w web developmencie
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:glass-orange transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/20 flex items-center justify-center mb-4 group-hover:bg-[#FF6B35]/30 transition-colors">
                  <Icon className="w-6 h-6 text-[#FF6B35]" />
                </div>
                <h3 className="text-xl text-white mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
