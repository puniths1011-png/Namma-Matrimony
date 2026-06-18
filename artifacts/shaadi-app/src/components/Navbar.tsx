import { Heart, HelpCircle, Bell, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#c41230] text-white shadow-md" data-testid="navbar">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2" data-testid="logo">
            <Heart className="h-6 w-6 fill-white" />
            <span className="text-2xl font-bold tracking-tight">shaadi</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white/80 transition-colors" data-testid="nav-link-my-shaadi">My Shaadi</a>
            <a href="#" className="hover:text-white/80 transition-colors" data-testid="nav-link-matches">Matches</a>
            <a href="#" className="hover:text-white/80 transition-colors" data-testid="nav-link-search">Search</a>
            <a href="#" className="hover:text-white/80 transition-colors" data-testid="nav-link-inbox">Inbox</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden sm:inline-flex h-8 items-center justify-center rounded-full bg-white px-4 text-xs font-semibold text-[#c41230] transition-colors hover:bg-white/90" data-testid="promo-badge">
            UPTO 55% OFF
          </button>
          
          <div className="flex items-center gap-1 cursor-pointer hover:text-white/80 transition-colors" data-testid="help-dropdown">
            <HelpCircle className="h-5 w-5" />
            <ChevronDown className="h-4 w-4" />
          </div>

          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" data-testid="user-dropdown">
            <Avatar className="h-8 w-8 border border-white/20">
              <AvatarImage src="" alt="User" />
              <AvatarFallback className="bg-white/10 text-white">US</AvatarFallback>
            </Avatar>
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>
    </nav>
  );
}
