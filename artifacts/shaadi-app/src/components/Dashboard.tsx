import { Activity, Users, Star, Eye, Bell } from "lucide-react";
import profile1 from "@/assets/images/profile1.png";
import profile3 from "@/assets/images/profile3.png";
import profile4 from "@/assets/images/profile4.png";
import profile5 from "@/assets/images/profile5.png";
import profile6 from "@/assets/images/profile6.png";

export default function Dashboard() {
  const recommendedMatches = [
    { id: 1, name: "Priya T", age: 26, src: profile3 },
    { id: 2, name: "Deepika R", age: 24, src: profile5 },
    { id: 3, name: "Meera S", age: 25, src: profile6 },
    { id: 4, name: "Gowthami V", age: 26, src: profile1 },
  ];

  return (
    <div className="w-full py-12 border-t border-gray-200 bg-gradient-to-b from-white to-gray-50/50" data-testid="dashboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">My Profile Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Completeness Card */}
          <div className="glass-card rounded-2xl p-6 relative overflow-hidden" data-testid="dashboard-completeness">
            <div className="absolute -right-6 -top-6 w-32 h-32 bg-[#c41230]/5 rounded-full blur-2xl"></div>
            
            <h3 className="font-semibold text-gray-800 mb-4">Profile Completeness</h3>
            <div className="flex items-center gap-6 mb-6">
              <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#fee2e2"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#c41230"
                    strokeWidth="3"
                    strokeDasharray="85, 100"
                  />
                </svg>
                <div className="absolute text-xl font-bold text-gray-800">85%</div>
              </div>
              <div className="text-sm text-gray-600">
                Complete your profile to get more matches and better responses.
              </div>
            </div>
            
            <ul className="space-y-2 text-sm">
              <li className="flex items-center text-emerald-600"><span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center mr-2"><Check className="w-3 h-3" /></span> Basic Details</li>
              <li className="flex items-center text-emerald-600"><span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center mr-2"><Check className="w-3 h-3" /></span> Education & Career</li>
              <li className="flex items-center text-gray-400"><span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2"></span> Family Details <span className="ml-auto text-xs text-[#c41230] font-medium cursor-pointer">+ Add</span></li>
              <li className="flex items-center text-gray-400"><span className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center mr-2"></span> Partner Preferences <span className="ml-auto text-xs text-[#c41230] font-medium cursor-pointer">+ Add</span></li>
            </ul>
          </div>
          
          {/* Stats */}
          <div className="md:col-span-2 grid grid-cols-2 gap-4" data-testid="dashboard-stats">
            <div className="glass-card rounded-2xl p-5 flex flex-col justify-center transition-transform hover:scale-[1.02]">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-3">
                <Eye className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">24</div>
              <div className="text-sm text-gray-500 font-medium">Profile Views this week</div>
            </div>
            
            <div className="glass-card rounded-2xl p-5 flex flex-col justify-center transition-transform hover:scale-[1.02]">
              <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mb-3">
                <Star className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">12</div>
              <div className="text-sm text-gray-500 font-medium">Interests Received</div>
            </div>
            
            <div className="glass-card rounded-2xl p-5 flex flex-col justify-center transition-transform hover:scale-[1.02]">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-3">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">1,055</div>
              <div className="text-sm text-gray-500 font-medium">Matching Profiles</div>
            </div>
            
            <div className="glass-card rounded-2xl p-5 flex flex-col justify-center transition-transform hover:scale-[1.02]">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mb-3">
                <Activity className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">142</div>
              <div className="text-sm text-gray-500 font-medium">Members Online Now</div>
            </div>
          </div>
        </div>

        {/* Activity & Recommended */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1" data-testid="dashboard-activity">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2"><Bell className="w-4 h-4 text-[#c41230]" /> Recent Activity</h3>
            <div className="glass-card rounded-xl p-4 space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <img src={profile4} alt="Anjali M" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm text-gray-800"><span className="font-semibold">Anjali M</span> liked your profile</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                  <img src={profile5} alt="Deepika R" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm text-gray-800"><span className="font-semibold">Deepika R</span> viewed your profile</p>
                  <p className="text-xs text-gray-400">5 hours ago</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">You have 10 new matches today</p>
                  <p className="text-xs text-gray-400">12 hours ago</p>
                </div>
              </div>
              <button className="w-full text-center text-sm text-[#c41230] font-medium pt-2 hover:underline">View All Activity</button>
            </div>
          </div>
          
          <div className="lg:col-span-2" data-testid="dashboard-recommended">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2"><Star className="w-4 h-4 text-[#c41230]" /> Recommended Matches</h3>
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 no-scrollbar">
              {recommendedMatches.map(match => (
                <div key={match.id} className="glass-card rounded-xl overflow-hidden min-w-[160px] group cursor-pointer hover:shadow-md transition-shadow">
                  <div className="h-40 w-full overflow-hidden">
                    <img src={match.src} alt={match.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-3 text-center">
                    <div className="font-semibold text-gray-900 truncate">{match.name}</div>
                    <div className="text-xs text-gray-500">{match.age} yrs</div>
                    <button className="mt-3 w-full bg-[#c41230] hover:bg-red-800 text-white py-1.5 rounded-full text-xs font-medium transition-colors">
                      Connect
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple internal check icon component
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
