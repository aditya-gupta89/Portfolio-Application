import { AboutSection } from "@/sections/About";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import HomeSection from "@/sections/Home";
export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <TapeSection />
      <AboutSection />
      <TapeSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
