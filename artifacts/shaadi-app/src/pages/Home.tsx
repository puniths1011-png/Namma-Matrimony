import Navbar from "@/components/Navbar";
import SubNav from "@/components/SubNav";
import FilterSidebar from "@/components/FilterSidebar";
import MatchesFeed from "@/components/MatchesFeed";
import RightStrip from "@/components/RightStrip";
import Dashboard from "@/components/Dashboard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50 font-sans flex flex-col" data-testid="home-page">
      <Navbar />
      <SubNav />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative">
        <div className="flex items-start gap-6 relative">
          
          {/* Left Column - Filters */}
          <div className="hidden md:block shrink-0">
            <FilterSidebar />
          </div>
          
          {/* Center Column - Feed */}
          <MatchesFeed />
          
          {/* Right Column - Strip */}
          <RightStrip />
          
        </div>
      </main>

      <Dashboard />
      
      <footer className="bg-white border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        <div className="max-w-7xl mx-auto px-4">
          <p>© 2024 Shaadi Matchmaking. Crafted with precision.</p>
        </div>
      </footer>
    </div>
  );
}
