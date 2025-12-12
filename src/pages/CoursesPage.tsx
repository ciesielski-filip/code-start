import { CourseCard } from "../components/CourseCard";
import { Footer } from "../components/Footer";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { coursesData } from "../data/coursesData";

export function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on search query
  const filteredCourses = coursesData.filter((course) => {
    const query = searchQuery.toLowerCase();
    return (
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query) ||
      course.level.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl text-white">
              Nasze <span className="text-[#FF6B35]">Kursy</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Wybierz kurs odpowiedni dla siebie i zacznij swoją przygodę z programowaniem
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Szukaj kursu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass rounded-xl px-12 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-[#FF6B35]/40 transition-colors"
              />
            </div>
            <button className="glass rounded-xl px-6 py-4 text-white hover:border-[#FF6B35]/40 transition-colors flex items-center gap-2 justify-center">
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filtry</span>
            </button>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-white/60">
                  Nie znaleziono kursów pasujących do wyszukiwania: "{searchQuery}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}