import { useState } from "react";
import DashboardLayout from "@/components/matches/DashboardLayout";
import { Search, Send, Heart, CheckCheck, Clock } from "lucide-react";
import profile1 from "@/assets/images/profile1.png";
import profile2 from "@/assets/images/profile2.png";
import profile3 from "@/assets/images/profile3.png";
import profile4 from "@/assets/images/profile4.png";
import profile5 from "@/assets/images/profile5.png";
import profile6 from "@/assets/images/profile6.png";

interface InboxPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

const inboxTabs = ["All", "Interests", "Messages", "Accepted"];

const conversations = [
  { id: 1, img: profile1, name: "Priya Sharma", city: "Mumbai", lastMsg: "Thank you! I'd love to know more about you.", time: "2m ago", unread: 3, type: "message", online: true },
  { id: 2, img: profile2, name: "Ananya Patel", city: "Ahmedabad", lastMsg: "Sent you an interest request", time: "1h ago", unread: 1, type: "interest", online: false },
  { id: 3, img: profile3, name: "Deepa Nair", city: "Kochi", lastMsg: "Hi! I came across your profile and...", time: "3h ago", unread: 0, type: "message", online: true },
  { id: 4, img: profile4, name: "Fatima Khan", city: "Hyderabad", lastMsg: "Accepted your interest ✓", time: "Yesterday", unread: 0, type: "accepted", online: false },
  { id: 5, img: profile5, name: "Neha Verma", city: "Delhi", lastMsg: "Liked your profile ♥", time: "Yesterday", unread: 0, type: "like", online: false },
  { id: 6, img: profile6, name: "Sunita Reddy", city: "Bangalore", lastMsg: "Sent you an interest request", time: "2 days ago", unread: 0, type: "interest", online: false },
];

const messages = [
  { from: "them", text: "Hi! I came across your profile on Rishtey and found it quite interesting.", time: "10:02 AM" },
  { from: "me", text: "Hello Priya! Thank you for reaching out. I went through your profile too and it's impressive!", time: "10:15 AM" },
  { from: "them", text: "Thank you! I see you're a software engineer at TCS. What kind of projects do you work on?", time: "10:18 AM" },
  { from: "me", text: "I mostly work on backend development and cloud solutions. What about you — how do you find your work as a doctor?", time: "10:30 AM" },
  { from: "them", text: "It's very fulfilling! Long hours but very rewarding. I'd love to connect further on a call sometime.", time: "10:45 AM" },
  { from: "them", text: "Thank you! I'd love to know more about you.", time: "10:46 AM" },
];

export default function InboxPage({ setIsLoggedIn }: InboxPageProps) {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(conversations[0]);
  const [newMsg, setNewMsg] = useState("");

  const filtered = activeTab === "All" ? conversations :
    activeTab === "Interests" ? conversations.filter(c => c.type === "interest") :
    activeTab === "Messages" ? conversations.filter(c => c.type === "message") :
    conversations.filter(c => c.type === "accepted");

  return (
    <DashboardLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6" data-testid="inbox-page">
        <h1 className="text-2xl font-serif font-bold text-gray-900 mb-5">Inbox</h1>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" style={{ height: "calc(100vh - 220px)", minHeight: 480 }}>
          <div className="flex h-full">
            <div className="w-80 border-r border-gray-100 flex flex-col shrink-0">
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/30" placeholder="Search conversations..." />
                </div>
              </div>
              <div className="flex border-b border-gray-100">
                {inboxTabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-2.5 text-xs font-semibold transition-colors ${activeTab === tab ? "text-[#8B1A4A] border-b-2 border-[#8B1A4A]" : "text-gray-500 hover:text-gray-700"}`}
                    data-testid={`inbox-tab-${tab.toLowerCase()}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex-1 overflow-y-auto">
                {filtered.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelected(c)}
                    className={`w-full flex items-start gap-3 p-4 border-b border-gray-50 hover:bg-gray-50 transition-colors text-left ${selected.id === c.id ? "bg-[#8B1A4A]/5 border-l-2 border-l-[#8B1A4A]" : ""}`}
                    data-testid={`conversation-${c.id}`}
                  >
                    <div className="relative shrink-0">
                      <img src={c.img} alt={c.name} className="h-12 w-12 rounded-full object-cover" />
                      {c.online && <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold text-gray-900 truncate">{c.name}</p>
                        <span className="text-xs text-gray-400 shrink-0 ml-1">{c.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">{c.city}</p>
                      <p className="text-xs text-gray-500 mt-1 truncate">{c.lastMsg}</p>
                    </div>
                    {c.unread > 0 && (
                      <span className="shrink-0 h-5 w-5 bg-[#8B1A4A] text-white text-xs rounded-full flex items-center justify-center font-bold">{c.unread}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-4 p-4 border-b border-gray-100">
                <div className="relative">
                  <img src={selected.img} alt={selected.name} className="h-10 w-10 rounded-full object-cover" />
                  {selected.online && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border-2 border-white" />}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{selected.name}</p>
                  <p className="text-xs text-gray-500">{selected.city} · {selected.online ? <span className="text-green-500">Online now</span> : "Last seen 2h ago"}</p>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <button className="flex items-center gap-1.5 text-sm text-[#8B1A4A] font-semibold border border-[#8B1A4A]/30 px-3 py-1.5 rounded-lg hover:bg-[#8B1A4A]/5">
                    <Heart className="h-4 w-4" /> View Profile
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.from === "me" ? "justify-end" : "justify-start"}`}>
                    {m.from === "them" && (
                      <img src={selected.img} alt="" className="h-7 w-7 rounded-full object-cover mr-2 self-end shrink-0" />
                    )}
                    <div className={`max-w-xs md:max-w-sm rounded-2xl px-4 py-2.5 text-sm ${
                      m.from === "me"
                        ? "bg-[#8B1A4A] text-white rounded-br-sm"
                        : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-sm"
                    }`}>
                      <p>{m.text}</p>
                      <div className={`flex items-center gap-1 mt-1 ${m.from === "me" ? "justify-end" : ""}`}>
                        <span className={`text-xs ${m.from === "me" ? "text-white/60" : "text-gray-400"}`}>{m.time}</span>
                        {m.from === "me" && <CheckCheck className="h-3.5 w-3.5 text-white/60" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-gray-100 bg-white">
                <div className="flex items-center gap-3">
                  <input
                    value={newMsg}
                    onChange={(e) => setNewMsg(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter" && newMsg.trim()) setNewMsg(""); }}
                    placeholder="Type a message..."
                    className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/30 focus:border-[#8B1A4A]"
                    data-testid="message-input"
                  />
                  <button
                    onClick={() => setNewMsg("")}
                    disabled={!newMsg.trim()}
                    className="bg-[#8B1A4A] hover:bg-[#7A1540] disabled:bg-gray-200 text-white p-2.5 rounded-xl transition-colors"
                    data-testid="btn-send-message"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
