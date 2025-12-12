export const coursesData = [
  {
    id: 1,
    title: "Fundamenty HTML & CSS",
    description: "Naucz się podstaw tworzenia stron internetowych od zera. Poznaj semantyczny HTML i nowoczesny CSS.",
    level: "Początkujący",
    duration: "8 godz",
    students: "2.4k",
    image: "https://images.unsplash.com/photo-1576145790918-bdddd6d5ad21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodG1sJTIwY3NzJTIwY29kZXxlbnwxfHx8fDE3NjU1NTgwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDescription: "Ten kurs nauczy Cię wszystkiego, czego potrzebujesz, aby rozpocząć tworzenie profesjonalnych stron internetowych. Poznasz fundamenty HTML5 i CSS3, które są podstawą każdej strony w internecie.",
    instructor: "Anna Kowalska",
    rating: 4.8,
    totalLessons: 32,
    modules: [
      {
        title: "Wprowadzenie do HTML",
        lessons: [
          { title: "Czym jest HTML?", duration: "15 min", completed: false },
          { title: "Struktura dokumentu HTML", duration: "20 min", completed: false },
          { title: "Podstawowe tagi HTML", duration: "25 min", completed: false },
          { title: "Semantyczny HTML", duration: "30 min", completed: false }
        ]
      },
      {
        title: "Stylowanie z CSS",
        lessons: [
          { title: "Wprowadzenie do CSS", duration: "20 min", completed: false },
          { title: "Selektory CSS", duration: "25 min", completed: false },
          { title: "Box Model", duration: "30 min", completed: false },
          { title: "Flexbox", duration: "35 min", completed: false }
        ]
      },
      {
        title: "Responsywny Design",
        lessons: [
          { title: "Media Queries", duration: "25 min", completed: false },
          { title: "Mobile-first approach", duration: "30 min", completed: false },
          { title: "Grid Layout", duration: "35 min", completed: false }
        ]
      },
      {
        title: "Projekt końcowy",
        lessons: [
          { title: "Planowanie projektu", duration: "20 min", completed: false },
          { title: "Implementacja", duration: "60 min", completed: false },
          { title: "Podsumowanie", duration: "15 min", completed: false }
        ]
      }
    ],
    requirements: [
      "Komputer z dostępem do internetu",
      "Edytor kodu (polecamy VS Code)",
      "Motywacja do nauki!"
    ],
    whatYouLearn: [
      "Tworzenie struktury stron używając HTML5",
      "Stylowanie elementów za pomocą CSS3",
      "Budowanie responsywnych layoutów",
      "Najlepsze praktyki w web development"
    ]
  },
  {
    id: 2,
    title: "JavaScript od podstaw",
    description: "Opanuj JavaScript - język, który ożywia strony internetowe. Od zmiennych po zaawansowane koncepcje.",
    level: "Początkujący",
    duration: "12 godz",
    students: "3.1k",
    image: "https://images.unsplash.com/photo-1742072594003-abf6ca86e154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhc2NyaXB0JTIwY29kaW5nJTIwc2NyZWVufGVufDF8fHx8MTc2NTUxNDg3OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDescription: "JavaScript to język programowania, który sprawia, że strony internetowe stają się interaktywne. Ten kurs poprowadzi Cię przez wszystkie fundamenty JS.",
    instructor: "Piotr Nowak",
    rating: 4.9,
    totalLessons: 45,
    modules: [
      {
        title: "Podstawy JavaScript",
        lessons: [
          { title: "Wprowadzenie do JS", duration: "20 min", completed: false },
          { title: "Zmienne i typy danych", duration: "25 min", completed: false },
          { title: "Operatory", duration: "20 min", completed: false },
          { title: "Instrukcje warunkowe", duration: "30 min", completed: false }
        ]
      },
      {
        title: "Funkcje i obiekty",
        lessons: [
          { title: "Funkcje w JavaScript", duration: "35 min", completed: false },
          { title: "Arrow functions", duration: "25 min", completed: false },
          { title: "Obiekty", duration: "30 min", completed: false },
          { title: "Tablice", duration: "35 min", completed: false }
        ]
      },
      {
        title: "DOM i wydarzenia",
        lessons: [
          { title: "Manipulacja DOM", duration: "40 min", completed: false },
          { title: "Event listeners", duration: "35 min", completed: false },
          { title: "Form handling", duration: "30 min", completed: false }
        ]
      },
      {
        title: "Asynchroniczność",
        lessons: [
          { title: "Callbacks", duration: "25 min", completed: false },
          { title: "Promises", duration: "30 min", completed: false },
          { title: "Async/Await", duration: "35 min", completed: false },
          { title: "Fetch API", duration: "40 min", completed: false }
        ]
      }
    ],
    requirements: [
      "Podstawowa znajomość HTML i CSS",
      "Edytor kodu",
      "Przeglądarka internetowa"
    ],
    whatYouLearn: [
      "Podstawy programowania w JavaScript",
      "Manipulacja DOM i obsługa wydarzeń",
      "Programowanie asynchroniczne",
      "Praca z API i danymi"
    ]
  },
  {
    id: 3,
    title: "React - Tworzenie aplikacji",
    description: "Buduj nowoczesne aplikacje webowe używając najpopularniejszego frameworka JavaScript.",
    level: "Średniozaawansowany",
    duration: "16 godz",
    students: "1.8k",
    image: "https://images.unsplash.com/photo-1610986602726-19f650133f7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGZyYW1ld29yayUyMGNvZGV8ZW58MXx8fHwxNzY1NTU4MDUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDescription: "React to najpopularniejsza biblioteka JavaScript do tworzenia interfejsów użytkownika. Naucz się budować nowoczesne, wydajne aplikacje webowe.",
    instructor: "Marcin Wiśniewski",
    rating: 4.9,
    totalLessons: 52,
    modules: [
      {
        title: "Podstawy React",
        lessons: [
          { title: "Czym jest React?", duration: "20 min", completed: false },
          { title: "JSX", duration: "25 min", completed: false },
          { title: "Komponenty", duration: "30 min", completed: false },
          { title: "Props", duration: "25 min", completed: false }
        ]
      },
      {
        title: "State i lifecycle",
        lessons: [
          { title: "useState Hook", duration: "35 min", completed: false },
          { title: "useEffect Hook", duration: "40 min", completed: false },
          { title: "Zarządzanie stanem", duration: "45 min", completed: false }
        ]
      },
      {
        title: "Routing i nawigacja",
        lessons: [
          { title: "React Router", duration: "40 min", completed: false },
          { title: "Nested routes", duration: "35 min", completed: false },
          { title: "Protected routes", duration: "30 min", completed: false }
        ]
      },
      {
        title: "Zaawansowane koncepcje",
        lessons: [
          { title: "Context API", duration: "45 min", completed: false },
          { title: "Custom Hooks", duration: "40 min", completed: false },
          { title: "Performance optimization", duration: "50 min", completed: false }
        ]
      }
    ],
    requirements: [
      "Dobra znajomość JavaScript",
      "Znajomość ES6+",
      "Node.js zainstalowany"
    ],
    whatYouLearn: [
      "Tworzenie komponentów React",
      "Zarządzanie stanem aplikacji",
      "Routing i nawigacja",
      "Zaawansowane wzorce React"
    ]
  },
  {
    id: 4,
    title: "Responsive Web Design",
    description: "Twórz strony, które świetnie wyglądają na każdym urządzeniu. Mobile-first approach i media queries.",
    level: "Średniozaawansowany",
    duration: "10 godz",
    students: "2.2k",
    image: "https://images.unsplash.com/photo-1691073112675-9685bc6779bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNwb25zaXZlJTIwZGVzaWduJTIwbW9iaWxlfGVufDF8fHx8MTc2NTU1ODA1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDescription: "Naucz się tworzyć strony internetowe, które wyglądają świetnie na wszystkich urządzeniach - od smartfonów po duże monitory.",
    instructor: "Katarzyna Lewandowska",
    rating: 4.7,
    totalLessons: 28,
    modules: [
      {
        title: "Podstawy RWD",
        lessons: [
          { title: "Czym jest Responsive Design?", duration: "15 min", completed: false },
          { title: "Viewport i meta tag", duration: "20 min", completed: false },
          { title: "Jednostki relatywne", duration: "25 min", completed: false }
        ]
      },
      {
        title: "Media Queries",
        lessons: [
          { title: "Wprowadzenie do Media Queries", duration: "30 min", completed: false },
          { title: "Breakpoints", duration: "25 min", completed: false },
          { title: "Mobile-first approach", duration: "35 min", completed: false }
        ]
      },
      {
        title: "Flexbox i Grid",
        lessons: [
          { title: "Flexbox w praktyce", duration: "40 min", completed: false },
          { title: "CSS Grid", duration: "45 min", completed: false },
          { title: "Responsywne layouty", duration: "50 min", completed: false }
        ]
      }
    ],
    requirements: [
      "Podstawowa znajomość HTML i CSS",
      "Zrozumienie Box Model"
    ],
    whatYouLearn: [
      "Mobile-first design",
      "Media queries i breakpoints",
      "Flexbox i CSS Grid",
      "Optymalizacja dla różnych urządzeń"
    ]
  },
  {
    id: 5,
    title: "Web Development Masterclass",
    description: "Kompleksowy kurs obejmujący frontend i backend. Stwórz pełnoprawną aplikację webową.",
    level: "Zaawansowany",
    duration: "24 godz",
    students: "1.5k",
    image: "https://images.unsplash.com/photo-1657812159055-7bae416f386d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1NDkzOTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDescription: "Kompleksowy kurs, który przeprowadzi Cię przez cały proces tworzenia profesjonalnej aplikacji webowej od zera do wdrożenia.",
    instructor: "Tomasz Kamiński",
    rating: 4.9,
    totalLessons: 68,
    modules: [
      {
        title: "Frontend zaawansowany",
        lessons: [
          { title: "Architektura aplikacji", duration: "45 min", completed: false },
          { title: "State management", duration: "50 min", completed: false },
          { title: "Optymalizacja wydajności", duration: "55 min", completed: false }
        ]
      },
      {
        title: "Backend z Node.js",
        lessons: [
          { title: "Wprowadzenie do Node.js", duration: "40 min", completed: false },
          { title: "Express.js", duration: "50 min", completed: false },
          { title: "RESTful API", duration: "60 min", completed: false },
          { title: "Autentykacja", duration: "55 min", completed: false }
        ]
      },
      {
        title: "Bazy danych",
        lessons: [
          { title: "MongoDB podstawy", duration: "45 min", completed: false },
          { title: "Mongoose ODM", duration: "50 min", completed: false },
          { title: "Relacje w bazie", duration: "40 min", completed: false }
        ]
      },
      {
        title: "Deployment",
        lessons: [
          { title: "Git i GitHub", duration: "35 min", completed: false },
          { title: "CI/CD", duration: "40 min", completed: false },
          { title: "Wdrożenie aplikacji", duration: "50 min", completed: false }
        ]
      }
    ],
    requirements: [
      "Zaawansowana znajomość JavaScript",
      "Doświadczenie z React",
      "Podstawy baz danych"
    ],
    whatYouLearn: [
      "Full-stack development",
      "Tworzenie REST API",
      "Praca z bazami danych",
      "Deployment i DevOps"
    ]
  },
  {
    id: 6,
    title: "Nowoczesny Frontend",
    description: "Poznaj najnowsze technologie i narzędzia używane przez profesjonalistów w branży.",
    level: "Zaawansowany",
    duration: "20 godz",
    students: "1.2k",
    image: "https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBsYXB0b3B8ZW58MXx8fHwxNzY1NDk4MDI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    fullDescription: "Poznaj najnowsze trendy i technologie w świecie frontend development. TypeScript, Next.js, Tailwind CSS i więcej.",
    instructor: "Jan Kowalczyk",
    rating: 4.8,
    totalLessons: 58,
    modules: [
      {
        title: "TypeScript",
        lessons: [
          { title: "Wprowadzenie do TypeScript", duration: "30 min", completed: false },
          { title: "Typy podstawowe", duration: "35 min", completed: false },
          { title: "Interfaces i Types", duration: "40 min", completed: false },
          { title: "Generics", duration: "45 min", completed: false }
        ]
      },
      {
        title: "Next.js",
        lessons: [
          { title: "Czym jest Next.js?", duration: "25 min", completed: false },
          { title: "Server-side rendering", duration: "50 min", completed: false },
          { title: "Static generation", duration: "45 min", completed: false },
          { title: "API routes", duration: "40 min", completed: false }
        ]
      },
      {
        title: "Styling nowoczesnych aplikacji",
        lessons: [
          { title: "Tailwind CSS", duration: "40 min", completed: false },
          { title: "CSS-in-JS", duration: "35 min", completed: false },
          { title: "Design systems", duration: "45 min", completed: false }
        ]
      },
      {
        title: "Narzędzia deweloperskie",
        lessons: [
          { title: "Vite", duration: "30 min", completed: false },
          { title: "ESLint i Prettier", duration: "25 min", completed: false },
          { title: "Testing", duration: "50 min", completed: false }
        ]
      }
    ],
    requirements: [
      "Zaawansowana znajomość React",
      "Doświadczenie z JavaScript",
      "Chęć nauki nowych technologii"
    ],
    whatYouLearn: [
      "TypeScript w praktyce",
      "Next.js i SSR",
      "Nowoczesne narzędzia build",
      "Best practices 2024"
    ]
  }
];
