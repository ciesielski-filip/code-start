import { useState, useEffect } from "react";
import { Trophy, X } from "lucide-react";
import { Button } from "./ui/button";
import { createPortal } from "react-dom";

interface KnowledgeQuizProps {
    isOpen: boolean;
    onClose: () => void;
}

type Question = {
    id: number;
    question: string;
    options: string[];
    correctAnswer: string;
};

const quizQuestions: Question[] = [
    {
        id: 1,
        question: "Do czego służy znacznik <a>?",
        options: [
            "Do tworzenia linków (odnośników)",
            "Do pogrubiania tekstu",
            "Do wstawiania obrazków",
            "Do tworzenia tabel"
        ],
        correctAnswer: "Do tworzenia linków (odnośników)"
    },
    {
        id: 2,
        question: "Jak odwołać się do elementu w CSS?",
        options: [
            "poprzez \".\" (klasę)",
            "poprzez \"#\" (id)",
            "poprzez znak semantyczny (np. div)",
            "wszystkie odpowiedzi są poprawne"
        ],
        correctAnswer: "wszystkie odpowiedzi są poprawne"
    },
    {
        id: 3,
        question: "Za co odpowiada “hover” w CSS?",
        options: [
            "Za marginesy elementu",
            "Za zmianę stylu po najechaniu myszką",
            "Za wielkość czcionki",
            "Za wyświetlanie na urządzeniach mobilnych"
        ],
        correctAnswer: "Za zmianę stylu po najechaniu myszką"
    }
];

export function KnowledgeQuiz({ isOpen, onClose }: KnowledgeQuizProps) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        if (isOpen) {
            resetQuiz();
        }
    }, [isOpen]);

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedOption(null);
        setScore(0);
        setShowResult(false);
    };

    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (!selectedOption) return;

        // Calculate score silently
        if (selectedOption === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }

        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
        }
    };

    const getPercentage = () => Math.round((score / quizQuestions.length) * 100);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 flex items-center justify-center p-6 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
            style={{ zIndex: 99999 }}
        >
            <div
                className="glass rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Column: Content */}
                <div className="flex-1 flex flex-col min-w-0">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            <h2 className="text-lg font-semibold text-white">Sprawdź swoją wiedzę</h2>
                        </div>
                        <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className={`p-6 pt-0 flex-1 flex flex-col ${!showResult ? 'justify-between' : ''}`}>
                        {!showResult ? (
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between text-sm text-zinc-400 mb-8">
                                    <span>Pytanie {currentQuestionIndex + 1} z {quizQuestions.length}</span>
                                </div>

                                {/* Question */}
                                <h3 className="text-2xl font-bold text-white mb-8">
                                    {currentQuestion.question}
                                </h3>

                                {/* Options */}
                                <div className="space-y-4 mb-8">
                                    {currentQuestion.options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`w-full p-4 rounded-lg text-left transition-all flex items-center justify-between group ${selectedOption === option
                                                ? "bg-[#FF6B35]/20 text-white"
                                                : "bg-zinc-900/40 text-zinc-400 hover:bg-zinc-900/80 hover:text-white"
                                                }`}
                                        >
                                            <span>{option}</span>
                                            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${selectedOption === option
                                                ? "bg-[#FF6B35]"
                                                : "bg-zinc-700 group-hover:bg-zinc-600"
                                                }`}>
                                                {selectedOption === option && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                {/* Next Button */}
                                <div className="mt-auto">
                                    <Button
                                        onClick={handleNext}
                                        disabled={!selectedOption}
                                        className={`w-full ${!selectedOption ? 'bg-zinc-800 text-zinc-500' : 'bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white'}`}
                                    >
                                        {currentQuestionIndex < quizQuestions.length - 1 ? "Następne pytanie" : "Zakończ i sprawdź wynik"}
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center space-y-6 py-8 animate-in zoom-in-95">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FF6B35]/20 mb-4">
                                    <Trophy className="w-10 h-10 text-[#FF6B35]" />
                                </div>

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">
                                        Gratulacje!
                                    </h3>
                                    <p className="text-zinc-400">
                                        Ukończyłeś test wiedzy HTML & CSS
                                    </p>
                                </div>

                                <div className="bg-zinc-900/50 p-6 rounded-xl border border-white/5">
                                    <div className="text-4xl font-bold text-[#FF6B35] mb-2">
                                        {getPercentage()}%
                                    </div>
                                    <p className="text-sm text-zinc-500">
                                        Poprawne odpowiedz: {score} z {quizQuestions.length}
                                    </p>
                                </div>

                                <div className="flex gap-3 justify-center">
                                    <Button onClick={resetQuiz} variant="outline" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white">
                                        Spróbuj ponownie
                                    </Button>
                                    <Button onClick={onClose} className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                                        Zamknij
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="hidden md:block w-1/2 relative min-h-full">
                    <img
                        src="/src/assets/advisor-robot.jpg"
                        alt="AI Advisor Robot"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Optional Caption overlaid on image */}
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-2xl font-bold mb-2">Quiz Wiedzy</h3>
                        <p className="text-white/80 text-sm">Sprawdź, czy jesteś gotowy na rozpoczęcie profesjonalnej nauki.</p>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
