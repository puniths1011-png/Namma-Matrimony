export default function SubNav() {
  const tabs = [
    { name: "New Matches", count: "1,055", active: true },
    { name: "Today's Matches", count: "10", active: false },
    { name: "My Matches", count: "9999+", active: false },
    { name: "Near Me", count: "41", active: false },
    { name: "More Matches", count: "", active: false },
  ];

  return (
    <div className="sticky top-16 z-40 w-full bg-white border-b border-gray-200 shadow-sm" data-testid="subnav">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center whitespace-nowrap py-4 text-sm font-medium transition-colors ${
                tab.active
                  ? "border-b-2 border-[#c41230] text-[#c41230]"
                  : "border-b-2 border-transparent text-gray-600 hover:border-gray-300 hover:text-gray-900"
              }`}
              data-testid={`subnav-tab-${tab.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {tab.name}
              {tab.count && (
                <span className="ml-1.5 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-600">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
