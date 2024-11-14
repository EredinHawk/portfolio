import AboutSection from "./components/AboutSection";
import Arrow from "./components/Arrow";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mt-24 mx-auto pt-4">
        <HeroSection />
        <Arrow />
        <hr className="mb-8"></hr>
        <AboutSection />
        <ProjectsSection />
        <Footer />
      </div>
    </main>
  );
}
