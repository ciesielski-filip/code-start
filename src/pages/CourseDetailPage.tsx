import { useParams, Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { coursesData } from "../data/coursesData";
import { ArrowLeft, Clock, Users, Star, CheckCircle2, PlayCircle, Book } from "lucide-react";
import { Button } from "../components/ui/button";
import { useState } from "react";

export function CourseDetailPage() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === Number(id));
  const [expandedModule, setExpandedModule] = useState<number | null>(0);

  if (!course) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Kurs nie został znaleziony</h2>
          <Link to="/kursy">
            <Button className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
              Powrót do kursów
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const totalDuration = course.modules.reduce((total, module) => {
    const moduleDuration = module.lessons.reduce((sum, lesson) => {
      const minutes = parseInt(lesson.duration);
      return sum + minutes;
    }, 0);
    return total + moduleDuration;
  }, 0);

  return (
    <div className="min-h-screen bg-black">
      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back button */}
          <Link 
            to="/kursy" 
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Powrót do kursów
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full glass-orange text-[#FF6B35]">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-[#FF6B35] text-[#FF6B35]" />
                    <span className="text-white">{course.rating}</span>
                  </div>
                </div>
                
                <h1 className="text-4xl text-white">{course.title}</h1>
                <p className="text-white/60 text-lg">{course.fullDescription}</p>

                {/* Stats */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-white/60">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration} materiału</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Users className="w-5 h-5" />
                    <span>{course.students} studentów</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Book className="w-5 h-5" />
                    <span>{course.totalLessons} lekcji</span>
                  </div>
                </div>
              </div>

              {/* What you'll learn */}
              <div className="glass rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl text-white">Czego się nauczysz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.whatYouLearn.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FF6B35] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course content / Timeline */}
              <div className="space-y-4">
                <h2 className="text-2xl text-white">Program kursu</h2>
                <div className="space-y-3">
                  {course.modules.map((module, moduleIndex) => (
                    <div key={moduleIndex} className="glass rounded-xl overflow-hidden">
                      {/* Module header */}
                      <button
                        onClick={() => setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)}
                        className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/20 flex items-center justify-center">
                            <span className="text-[#FF6B35]">{moduleIndex + 1}</span>
                          </div>
                          <div className="text-left">
                            <h3 className="text-white">{module.title}</h3>
                            <p className="text-white/60 text-sm">{module.lessons.length} lekcji</p>
                          </div>
                        </div>
                        <PlayCircle className={`w-5 h-5 text-white/60 transition-transform ${expandedModule === moduleIndex ? 'rotate-90' : ''}`} />
                      </button>

                      {/* Lessons */}
                      {expandedModule === moduleIndex && (
                        <div className="border-t border-white/10">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="px-5 py-4 flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                            >
                              <div className="flex items-center gap-3">
                                <PlayCircle className="w-4 h-4 text-white/40" />
                                <span className="text-white/80">{lesson.title}</span>
                              </div>
                              <span className="text-white/40 text-sm">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="glass rounded-2xl p-6 space-y-4">
                <h2 className="text-2xl text-white">Wymagania</h2>
                <ul className="space-y-2">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3 text-white/80">
                      <span className="text-[#FF6B35] mt-1">•</span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="glass rounded-2xl overflow-hidden sticky top-24">
                {/* Course image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#FF6B35]/20 to-transparent">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                {/* Sidebar content */}
                <div className="p-6 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Instruktor</span>
                      <span className="text-white">{course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Poziom</span>
                      <span className="text-white">{course.level}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Całkowity czas</span>
                      <span className="text-white">{Math.floor(totalDuration / 60)}h {totalDuration % 60}min</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white py-6">
                      Rozpocznij kurs
                    </Button>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/5">
                      Dodaj do ulubionych
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
