import { CheckCircle2, ChevronLeft, ChevronRight, Check } from "lucide-react";
import profile1 from "@/assets/images/profile1.png";
import profile2 from "@/assets/images/profile2.png";
import profile3 from "@/assets/images/profile3.png";
import profile4 from "@/assets/images/profile4.png";
import profile5 from "@/assets/images/profile5.png";
import profile6 from "@/assets/images/profile6.png";

const images = { profile1, profile2, profile3, profile4, profile5, profile6 };

export type ProfileData = {
  id: string;
  name: string;
  age: string;
  height: string;
  religion: string;
  caste: string;
  location: string;
  language: string;
  profession: string;
  badge?: { type: "plus" | "new"; label: string };
  action: "connect" | "upgrade";
  imageKey: keyof typeof images;
};

export default function ProfileCard({ profile }: { profile: ProfileData }) {
  return (
    <div className="glass-card glass-card-hover rounded-xl p-4 flex flex-col sm:flex-row gap-4 mb-4" data-testid={`profile-card-${profile.id}`}>
      
      {/* Left side: Photo */}
      <div className="relative w-full sm:w-[140px] h-[180px] rounded-lg overflow-hidden flex-shrink-0 group">
        <img 
          src={images[profile.imageKey] || profile1} 
          alt={profile.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {profile.badge && (
          <div className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold text-white shadow-sm z-10 ${
            profile.badge.type === "plus" ? "bg-amber-500" : "bg-emerald-500"
          }`}>
            {profile.badge.label}
          </div>
        )}
        
        <div className="absolute bottom-2 left-0 w-full flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <button className="bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors backdrop-blur-sm">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="text-white text-xs bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-sm">1 of 4</span>
          <button className="bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors backdrop-blur-sm">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Center: Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1 mb-2">
          <h3 className="text-xl font-bold text-gray-900 truncate">{profile.name}</h3>
          <CheckCircle2 className="w-4 h-4 text-blue-500 fill-blue-50" />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-[10px] font-medium text-green-700">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online now
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[10px] font-medium text-blue-700">
            You & Her
          </span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-medium text-purple-700">
            Astro
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-gray-600 mb-3">
          <div className="truncate">Age: <span className="font-medium text-gray-800">{profile.age} yrs, {profile.height}</span></div>
          <div className="truncate">Marital: <span className="font-medium text-gray-800">Never Married</span></div>
          <div className="truncate">Religion: <span className="font-medium text-gray-800">{profile.religion}, {profile.caste}</span></div>
          <div className="truncate">Location: <span className="font-medium text-gray-800">{profile.location}</span></div>
          <div className="truncate">Language: <span className="font-medium text-gray-800">{profile.language}</span></div>
          <div className="truncate">Profession: <span className="font-medium text-gray-800">{profile.profession}</span></div>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-2 pr-4">
          I am looking for a suitable partner for my daughter. She has completed her B.E / B.Tech. We come from a middle class, nuclear family background with orthodox values. <a href="#" className="text-[#c41230] hover:underline font-medium ml-1">More</a>
        </p>
      </div>
      
      {/* Right: Action */}
      <div className="sm:w-[130px] flex flex-col items-center justify-center border-t sm:border-t-0 sm:border-l border-gray-200/60 pt-4 sm:pt-0 pl-0 sm:pl-4 flex-shrink-0">
        <p className="text-xs text-gray-500 mb-3 text-center">Like this profile?</p>
        
        {profile.action === "connect" ? (
          <div className="flex flex-col items-center">
            <button className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105 mb-2" data-testid={`btn-connect-${profile.id}`}>
              <Check className="w-7 h-7" strokeWidth={3} />
            </button>
            <span className="text-xs font-semibold text-emerald-600">Connect Now</span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <button className="w-14 h-14 rounded-full bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105 mb-2" data-testid={`btn-upgrade-${profile.id}`}>
              <span className="text-2xl">👑</span>
            </button>
            <span className="text-xs font-semibold text-purple-600 text-center">Upgrade to<br/>Connect</span>
          </div>
        )}
      </div>
    </div>
  );
}
