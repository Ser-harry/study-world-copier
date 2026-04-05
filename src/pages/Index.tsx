import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import CoursesSection from "@/components/CoursesSection";
import CampusSection from "@/components/CampusSection";
import StatsSection from "@/components/StatsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <HeroSection />
    <WelcomeSection />
    <CoursesSection />
    <CampusSection />
    <StatsSection />
    <WhyChooseSection />
    <FooterSection />
  </div>
);

export default Index;
