import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

type FilterSection = {
  id: string;
  title: string;
  type: "radio" | "checkbox";
  options: { label: string; count?: string }[];
};

const filterSections: FilterSection[] = [
  {
    id: "verification",
    title: "Verification Status",
    type: "radio",
    options: [
      { label: "Open to All" },
      { label: "Blue Tick Profiles NEW" }
    ]
  },
  {
    id: "photo",
    title: "Photo Settings",
    type: "radio",
    options: [
      { label: "Open to All" },
      { label: "Visible to all", count: "500+" },
      { label: "Protected Photo", count: "165" }
    ]
  },
  {
    id: "joined",
    title: "Recently Joined",
    type: "radio",
    options: [
      { label: "Open to All" },
      { label: "Within a day", count: "104" },
      { label: "Within a week", count: "406" },
      { label: "Within a month", count: "2000+" }
    ]
  },
  {
    id: "active",
    title: "Active Members",
    type: "radio",
    options: [
      { label: "Open to All" },
      { label: "Within a day", count: "500+" },
      { label: "Within a week", count: "1000+" },
      { label: "Within a month", count: "2000+" }
    ]
  },
  {
    id: "income",
    title: "Annual Income",
    type: "checkbox",
    options: [
      { label: "Open to All" },
      { label: "INR 2 Lakh to...", count: "177" },
      { label: "INR 4 Lakh to...", count: "177" },
      { label: "Upto INR 1 Lak...", count: "124" },
      { label: "INR 7 Lakh to...", count: "93" },
      { label: "INR 1 Lakh to...", count: "64" },
      { label: "More ▶" }
    ]
  },
  {
    id: "marital",
    title: "Marital Status",
    type: "checkbox",
    options: [
      { label: "Open to All" },
      { label: "Never Married", count: "2000+" }
    ]
  }
];

export default function FilterSidebar() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    filterSections.reduce((acc, sec) => ({ ...acc, [sec.id]: true }), {})
  );

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-[240px] glass-card rounded-xl p-4 sticky top-[120px] max-h-[calc(100vh-140px)] overflow-y-auto no-scrollbar" data-testid="filter-sidebar">
      <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
        <h2 className="font-semibold text-gray-800 text-lg">Refine Search</h2>
        <button className="text-gray-500 hover:text-gray-800 transition-colors" data-testid="btn-close-filters">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-4">
        {filterSections.map((section) => (
          <div key={section.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0" data-testid={`filter-section-${section.id}`}>
            <button 
              className="flex w-full items-center justify-between py-2 text-sm font-medium text-gray-800 hover:text-[#c41230] transition-colors"
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              {openSections[section.id] ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </button>
            
            {openSections[section.id] && (
              <div className="mt-2 space-y-2 pl-1">
                {section.type === "radio" ? (
                  <RadioGroup defaultValue={section.options[0].label}>
                    {section.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2 py-1">
                        <RadioGroupItem value={option.label} id={`${section.id}-${idx}`} className="border-gray-300 text-[#c41230] focus:ring-[#c41230]" />
                        <Label htmlFor={`${section.id}-${idx}`} className="text-sm text-gray-600 font-normal cursor-pointer flex-1 flex justify-between">
                          <span className="truncate">{option.label}</span>
                          {option.count && <span className="text-gray-400 text-xs ml-2">({option.count})</span>}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <div className="space-y-2">
                    {section.options.map((option, idx) => (
                      <div key={idx} className="flex items-center space-x-2 py-1">
                        <Checkbox id={`${section.id}-${idx}`} className="border-gray-300 data-[state=checked]:bg-[#c41230] data-[state=checked]:border-[#c41230]" />
                        <Label htmlFor={`${section.id}-${idx}`} className="text-sm text-gray-600 font-normal cursor-pointer flex-1 flex justify-between">
                          <span className="truncate">{option.label}</span>
                          {option.count && <span className="text-gray-400 text-xs ml-2">({option.count})</span>}
                        </Label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
