import { useState, useEffect } from "react";
import { coursesData } from "../data/coursesData";
import { Loader2, Sparkles, X } from "lucide-react";
import { CourseCard } from "./CourseCard";
import { Button } from "./ui/button";

// Simplified standard modal implementation
interface CourseAdvisorProps {
    isOpen: boolean;
    onClose: () => void;
}

type Question = {
    id: string;
    question: string;
    options: string[];
};

const questions: Question[] = [
    {
        id: "experience",
        question: "Jak oceniasz swoje doświadczenie w programowaniu?",
        options: ["Początkujący (brak doświadczenia)", "Podstawowa wiedza", "Średniozaawansowany", "Zaawansowany"],
    },
    {
        id: "interest",
        question: "Co Cię najbardziej interesuje?",
        options: ["Tworzenie wyglądu stron (Frontend)", "Logika i bazy danych (Backend)", "Wszystko po trochu (Fullstack)", "Projektowanie i Design", "Testowanie i Jakość (QA)"],
    },
    {
        id: "time",
        question: "Ile czasu tygodniowo możesz poświęcić na naukę?",
        options: ["Mniej niż 5 godzin", "5-10 godzin", "10-20 godzin", "Ponad 20 godzin"],
    },
];

export function CourseAdvisor({ isOpen, onClose }: CourseAdvisorProps) {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState<{ courseId: number; reason: string } | null>(null);

    // Reset when opening
    useEffect(() => {
        if (isOpen) {
            setAnswers({});
            setRecommendation(null);
        }
    }, [isOpen]);

    // Don't render if closed
    if (!isOpen) return null;

    const handleOptionSelect = (questionId: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: value }));
    };

    const isFormComplete = questions.every((q) => answers[q.id]);

    const simulateRecommendation = async () => {
        setLoading(true);

        // Simulate AI "thinking" time
        await new Promise(resolve => setTimeout(resolve, 1500));

        const { experience, interest } = answers;
        let courseId = 1;
        let reason = "Ten kurs to idealny start dla Ciebie.";

        // Simple Rule-Based Logic (Simulated AI)
        if (interest.includes("QA") || interest.includes("Testowanie")) {
            courseId = 12; // QA
            reason = "Dbając o jakość oprogramowania, rola Testera Automatyzującego to świetny i przyszłościowy wybór.";
        } else if (experience.includes("Początkujący") || experience.includes("Podstawowa")) {
            if (interest.includes("Backend")) {
                courseId = 7; // Python
                reason = "Python to idealny pierwszy język - czytelny, potężny i używany wszędzie, od web devu po AI.";
            } else if (interest.includes("Fullstack")) {
                courseId = 2; // JavaScript
                reason = "JavaScript to język niezbędny do tworzenia logiki aplikacji i świetny wstęp do świata backendu.";
            } else if (interest.includes("Design")) {
                courseId = 8; // UX/UI
                reason = "Dla osób z artystycznym zacięciem, kurs UX/UI Design to najlepszy początek przygody z IT bez kodowania.";
            } else {
                courseId = 1; // HTML CSS
                reason = "Na początku przygody z programowaniem najważniejsze jest opanowanie fundamentów tworzenia stron - HTML i CSS.";
            }
        } else if (experience.includes("Średniozaawansowany")) {
            if (interest.includes("Frontend")) {
                courseId = 3; // React
                reason = "Skoro znasz już podstawy, czas nauczyć się najpopularniejszego frameworka frontendowego na rynku - React.";
            } else if (interest.includes("Design")) {
                courseId = 4; // RWD
                reason = "Dla osób skupionych na wyglądzie, umiejętność tworzenia perfekcyjnych responsywnych stron (RWD) to klucz do sukcesu.";
            } else if (interest.includes("Backend")) {
                courseId = 10; // Java
                reason = "Java i Spring Boot to standard w dużych firmach. To solidny krok w stronę kariery backend developera.";
            } else {
                courseId = 11; // C# (.NET)
                reason = "C# i platforma .NET to potężne narzędzia używane w korporacjach. Idealne dla aspirującego Fullstack Developera.";
            }
        } else {
            // Advanced
            if (interest.includes("Frontend")) {
                courseId = 6; // Modern Frontend
                reason = "Jako zaawansowany programista, powinieneś poznać najnowsze trendy, TypeScript i Next.js.";
            } else if (interest.includes("Backend")) {
                courseId = 9; // DevOps
                reason = "Znajomość Dockera i CI/CD to naturalny krok rozwoju dla senior developera chcącego optymalizować wdrożenia.";
            } else {
                courseId = 5; // Masterclass
                reason = "Kompleksowy kurs fullstack to wyzwanie odpowiednie dla Twoich umiejętności, pozwalające budować kompletne produkty.";
            }
        }

        setRecommendation({
            courseId,
            reason
        });
        setLoading(false);
    };

    const recommendedCourse = recommendation ? coursesData.find(c => c.id === recommendation.courseId) : null;

    const reset = () => {
        setAnswers({});
        setRecommendation(null);
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-6 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div
                className="glass border border-white/10 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Column: Content */}
                <div className="flex-1 flex flex-col min-w-0 overflow-y-auto max-h-[90vh]">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 sticky top-0 bg-transparent backdrop-blur-md z-10">
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-5 w-5 text-yellow-500" />
                            <h2 className="text-lg font-semibold text-white">AI Doradca Kursów</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-zinc-400 hover:text-white transition-colors p-1"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Scrollable Content Area */}
                    <div className="p-6 space-y-6 flex-1 pt-0">
                        {/* Question Form */}
                        {!recommendation && !loading && (
                            <div className="space-y-6 animate-in slide-in-from-bottom-2 duration-300">
                                <p className="text-zinc-400 text-sm">
                                    Odpowiedz na kilka pytań, a nasz algorytm dobierze szkolenie idealnie dopasowane do Twoich potrzeb.
                                </p>
                                {questions.map((q) => (
                                    <div key={q.id} className="space-y-3">
                                        <h3 className="text-sm font-medium text-zinc-300">{q.question}</h3>
                                        <div className="space-y-2">
                                            {q.options.map((option) => (
                                                <label
                                                    key={option}
                                                    className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all ${answers[q.id] === option
                                                        ? "bg-[#FF6B35]/20 text-white shadow-lg ring-1 ring-[#FF6B35]/50"
                                                        : "bg-zinc-900/40 hover:bg-zinc-900/80 text-zinc-400"
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name={q.id}
                                                        value={option}
                                                        checked={answers[q.id] === option}
                                                        onChange={(e) => handleOptionSelect(q.id, e.target.value)}
                                                        className="hidden" // Hiding default radio for cleaner look, styling is on the label
                                                    />
                                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${answers[q.id] === option
                                                        ? "border-[#FF6B35] bg-[#FF6B35]"
                                                        : "border-zinc-700 bg-transparent"
                                                        }`}>
                                                        {answers[q.id] === option && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                                    </div>
                                                    <span className="text-sm">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                <Button
                                    onClick={simulateRecommendation}
                                    disabled={!isFormComplete}
                                    className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white shadow-lg shadow-[#FF6B35]/20"
                                >
                                    <Sparkles className="w-4 h-4 mr-2" />
                                    Dobierz kurs
                                </Button>
                            </div>
                        )}

                        {/* Loading State */}
                        {loading && (
                            <div className="py-12 flex flex-col items-center justify-center space-y-4">
                                <Loader2 className="h-10 w-10 animate-spin text-[#FF6B35]" />
                                <p className="text-zinc-400 animate-pulse text-lg">Analizuję Twój profil...</p>
                            </div>
                        )}

                        {/* Results */}
                        {recommendation && recommendedCourse && (
                            <div className="space-y-6 animate-in zoom-in-95 duration-300">
                                <div className="bg-green-500/10 p-4 rounded-lg">
                                    <h4 className="font-semibold text-green-400 mb-1 text-sm uppercase tracking-wide">Polecany kurs</h4>
                                    <p className="text-xl font-bold text-white">{recommendedCourse.title}</p>
                                </div>

                                <div className="bg-zinc-900/50 p-4 rounded-lg">
                                    <p className="text-zinc-300 italic">"{recommendation.reason}"</p>
                                </div>

                                <div className="max-w-sm mx-auto w-full">
                                    <CourseCard {...recommendedCourse} onClick={onClose} />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    {recommendation && recommendedCourse && (
                        <div className="p-6 pt-0 flex flex-col sm:flex-row gap-3">
                            <Button className="w-full bg-white text-black hover:bg-white/90" asChild onClick={onClose}>
                                <a href={`/kursy/${recommendedCourse.id}`}>Zobacz szczegóły</a>
                            </Button>
                            <Button variant="ghost" className="w-full text-zinc-400 hover:text-white hover:bg-white/5" onClick={reset}>
                                Zacznij od nowa
                            </Button>
                        </div>
                    )}
                </div>

                {/* Right Column: Image */}
                <div className="hidden md:block w-1/2 relative min-h-full">
                    <img
                        src="/src/assets/advisor-robot.jpg"
                        alt="AI Advisor Robot"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    {/* Hiding duplicate massive Close button on image since we have one in header now */}

                    {/* Optional Caption overlaid on image */}
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Twój Osobisty Doradca</h3>
                        <p className="text-white/80 text-sm">Pomożemy Ci wybrać najlepszą ścieżkę rozwoju w świecie IT.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
