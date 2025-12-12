import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kursy" element={<CoursesPage />} />
          <Route path="/kursy/:id" element={<CourseDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}