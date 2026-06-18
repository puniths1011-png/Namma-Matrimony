import LandingNavbar from "@/components/landing/LandingNavbar";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import FeaturedProfiles from "@/components/landing/FeaturedProfiles";
import SuccessStories from "@/components/landing/SuccessStories";
import WhyRishtey from "@/components/landing/WhyRishtey";
import RegisterCTA from "@/components/landing/RegisterCTA";
import Footer from "@/components/landing/Footer";

interface LandingPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

export default function LandingPage({ setIsLoggedIn }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col" data-testid="landing-page">
      <LandingNavbar setIsLoggedIn={setIsLoggedIn} />
      <div id="hero"><Hero setIsLoggedIn={setIsLoggedIn} /></div>
      <div id="how-it-works"><HowItWorks /></div>
      <div id="featured-profiles"><FeaturedProfiles setIsLoggedIn={setIsLoggedIn} /></div>
      <div id="success-stories"><SuccessStories /></div>
      <div id="why-rishtey"><WhyRishtey /></div>
      <div id="register"><RegisterCTA setIsLoggedIn={setIsLoggedIn} /></div>
      <Footer />
    </div>
  );
}
