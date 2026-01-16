import { useState } from "react";
import OpenAI from "openai";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { coursesData } from "../data/coursesData";
import { Loader2, Sparkles } from "lucide-react";

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
        options: ["Tworzenie wyglądu stron (Frontend)", "Logika i bazy danych (Backend)", "Wszystko po trochu (Fullstack)", "Projektowanie i Design"],
    },
    {
        id: "time",
        question: "Ile czasu tygodniowo możesz poświęcić na naukę?",
        options: ["Mniej niż 5 godzin", "5-10 godzin", "10-20 godzin", "Ponad 20 godzin"],
    },
];

import { OPENAI_API_KEY } from "../config";

export function CourseAdvisor({ isOpen, onClose }: CourseAdvisorProps) {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [apiKey, setApiKey] = useState(OPENAI_API_KEY);
    const [loading, setLoading] = useState(false);
    const [recommendation, setRecommendation] = useState<{ courseId: number; reason: string } | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleOptionSelect = (value: string) => {
        setAnswers((prev) => ({ ...prev, [questions[step].id]: value }));
    };

    const handleNext = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            getRecommendation();
        }
    };

    const getRecommendation = async () => {
        if (!apiKey) {
            setError("Proszę podać klucz API OpenAI.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const openai = new OpenAI({
                apiKey: apiKey,
                dangerouslyAllowBrowser: true, // Client-side usage for demo
            });

            const coursesContext = coursesData
                .map((c) => `- ID: ${c.id}, Tytuł: ${c.title}, Poziom: ${c.level}, Opis: ${c.description}`)
                .join("\n");

            const prompt = `
Jesteś doradcą ds. kursów programowania. Poniżej znajduje się lista dostępnych kursów:
${coursesContext}

Profil użytkownika na podstawie ankiety:
- Doświadczenie: ${answers["experience"]}
- Zainteresowania: ${answers["interest"]}
- Dostępny czas: ${answers["time"]}

Na podstawie tych informacji, wybierz JEDEN najlepszy kurs dla tego użytkownika.
Zwróć odpowiedź TYLKO w formacie JSON:
{
  "recommendedCourseId": <ID kursu jako liczba>,
  "reason": "<Krótkie uzasadnienie dlaczego ten kurs pasuje, po polsku>"
}
`;

            const completion = await openai.chat.completions.create({
                messages: [{ role: "user", content: prompt }],
                model: "gpt-3.5-turbo",
            });

            const content = completion.choices[0].message.content;
            if (content) {
                try {
                    const result = JSON.parse(content);
                    setRecommendation({
                        courseId: result.recommendedCourseId,
                        reason: result.reason,
                    });
                } catch (e) {
                    console.error(e);
                    // Fallback parsing if JSON is malformed
                    setError("Nie udało się zinterpretować odpowiedzi AI. Spróbuj ponownie.");
                }
            }
        } catch (err: any) {
            console.error(err);
            setError("Wystąpił błąd podczas łączenia z OpenAI: " + (err.message || "Unknown error"));
        } finally {
            setLoading(false);
        }
    };

    const currentQuestion = questions[step];
    const recommendedCourse = recommendation ? coursesData.find(c => c.id === recommendation.courseId) : null;

    const reset = () => {
        setStep(0);
        setAnswers({});
        setRecommendation(null);
        setError(null);
    };

    return (
        <Dialog open={isOpen} onOpenChange={(open: boolean) => !open && onClose()}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-yellow-500" />
                        AI Doradca Kursów
                    </DialogTitle>
                    <DialogDescription>
                        Odpowiedz na kilka pytań, a sztuczna inteligencja dobierze dla Ciebie idealny kurs.
                    </DialogDescription>
                </DialogHeader>

                {!apiKey && !loading && !recommendation && (
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label htmlFor="apikey">Klucz API OpenAI</Label>
                            <Input
                                id="apikey"
                                type="password"
                                placeholder="sk-..."
                                value={apiKey}
                                onChange={(e) => setApiKey(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">Klucz jest wymagany do działania asystenta AI.</p>
                        </div>
                        <Button onClick={() => { if (apiKey) setError(null); }} disabled={!apiKey} className="w-full">Rozpocznij</Button>
                    </div>
                )}


                {apiKey && !recommendation && !loading && (
                    <div className="py-4 space-y-4">
                        <div className="flex justify-between text-sm text-muted-foreground mb-2">
                            <span>Pytanie {step + 1} z {questions.length}</span>
                        </div>
                        <h3 className="font-medium text-lg">{currentQuestion.question}</h3>
                        <RadioGroup onValueChange={handleOptionSelect} value={answers[currentQuestion.id]}>
                            {currentQuestion.options.map((option) => (
                                <div key={option} className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent cursor-pointer">
                                    <RadioGroupItem value={option} id={option} />
                                    <Label htmlFor={option} className="flex-grow cursor-pointer">{option}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                        <div className="pt-4 flex justify-end">
                            <Button onClick={handleNext} disabled={!answers[currentQuestion.id]}>
                                {step === questions.length - 1 ? "Zakończ i dobierz kurs" : "Dalej"}
                            </Button>
                        </div>
                    </div>
                )}

                {loading && (
                    <div className="py-8 flex flex-col items-center justify-center space-y-4">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="text-muted-foreground animate-pulse">Analizuję Twój profil...</p>
                    </div>
                )}

                {recommendation && recommendedCourse && (
                    <div className="py-4 space-y-4">
                        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-600 mb-1">Polecany kurs:</h4>
                            <p className="text-lg font-bold">{recommendedCourse.title}</p>
                        </div>

                        <p className="text-sm text-muted-foreground italic">"{recommendation.reason}"</p>

                        <div className="flex gap-2">
                            <img src={recommendedCourse.image} alt={recommendedCourse.title} className="w-16 h-16 object-cover rounded-md" />
                            <div>
                                <p className="text-sm font-medium">Poziom: {recommendedCourse.level}</p>
                                <p className="text-sm text-muted-foreground">Czas trwania: {recommendedCourse.duration}</p>
                            </div>
                        </div>

                        <DialogFooter className="sm:justify-start gap-2">
                            <Button className="w-full" asChild>
                                <a href={`/kursy/${recommendedCourse.id}`}>Zobacz szczegóły kursu</a>
                            </Button>
                            <Button variant="outline" className="w-full" onClick={reset}>Zacznij od nowa</Button>
                        </DialogFooter>
                    </div>
                )}

                {error && (
                    <div className="text-red-500 text-sm mt-2">
                        {error}
                        <Button variant="link" onClick={() => setError(null)} className="p-0 h-auto ml-2">Spróbuj ponownie</Button>
                    </div>
                )}

            </DialogContent>
        </Dialog>
    );
}
