import { useState } from "react";

interface SubNavProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const tabs = [
  { name: "New Matches", count: "1,247" },
  { name: "Today's", count: "18" },
  { name: "My Matches", count: "9,999+" },
  { name: "Near Me", count: "63" },
  { name: "Recently Viewed", count: "12" },
  { name: "Shortlisted", count: "7" },
];

export default function SubNav({ activeTab = "New Matches", onTabChange }: SubNavProps) {
  const [active, setActive] = useState(activeTab);

  const handleTab = (name: string) => {
    setActive(name);
    onTabChange?.(name);
  };

  return (
    <div className="sticky top-16 z-40 w-full bg-white border-b border-gray-200 shadow-sm" data-testid="subnav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-6 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTab(tab.name)}
              className={`flex items-center gap-1.5 whitespace-nowrap py-4 text-sm transition-all ${
                active === tab.name
                  ? "border-b-2 border-[#8B1A4A] text-[#8B1A4A] font-bold"
                  : "border-b-2 border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900 font-medium"
              }`}
              data-testid={`subnav-tab-${tab.name.toLowerCase().replace(/['\s▼]+/g, "-")}`}
            >
              {tab.name}
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                  active === tab.name
                    ? "bg-[#8B1A4A]/10 text-[#8B1A4A]"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
