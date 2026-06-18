import ProfileCard, { ProfileData } from "./ProfileCard";

const mockProfiles: ProfileData[] = [
  {
    id: "1",
    name: "Gowthami V",
    age: "26",
    height: "5'3\"",
    religion: "Hindu",
    caste: "Pillai",
    location: "Tiruppur, Tamil Nadu",
    language: "Tamil",
    profession: "Journalist",
    badge: { type: "plus", label: "Plus" },
    action: "connect",
    imageKey: "profile1"
  },
  {
    id: "2",
    name: "Khushi P",
    age: "23",
    height: "5'5\"",
    religion: "Hindu",
    caste: "Kurmi",
    location: "Bhopal, MP",
    language: "Hindi",
    profession: "Not Specified",
    badge: { type: "new", label: "New" },
    action: "upgrade",
    imageKey: "profile2"
  },
  {
    id: "3",
    name: "Priya T",
    age: "26",
    height: "5'6\"",
    religion: "Hindu",
    caste: "Brahmin-Maithili",
    location: "Delhi-NCR",
    language: "Maithili",
    profession: "Designer",
    action: "connect",
    imageKey: "profile3"
  },
  {
    id: "4",
    name: "Anjali M",
    age: "27",
    height: "5'4\"",
    religion: "Muslim",
    caste: "Sunni",
    location: "Mumbai, MH",
    language: "Urdu",
    profession: "Software Engineer",
    action: "connect",
    imageKey: "profile4"
  },
  {
    id: "5",
    name: "Deepika R",
    age: "24",
    height: "5'2\"",
    religion: "Hindu",
    caste: "Iyer",
    location: "Chennai, TN",
    language: "Tamil",
    profession: "Doctor",
    badge: { type: "plus", label: "Plus" },
    action: "connect",
    imageKey: "profile5"
  },
  {
    id: "6",
    name: "Meera S",
    age: "25",
    height: "5'5\"",
    religion: "Sikh",
    caste: "Jat",
    location: "Chandigarh",
    language: "Punjabi",
    profession: "Teacher",
    action: "connect",
    imageKey: "profile6"
  }
];

export default function MatchesFeed() {
  return (
    <div className="flex-1 w-full max-w-3xl pb-8" data-testid="matches-feed">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-800">New Members who match your Preferences</h1>
        <span className="text-sm text-gray-500 hidden sm:inline-block">Showing 1-{mockProfiles.length} of 1,055</span>
      </div>
      
      <div className="space-y-0">
        {mockProfiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium shadow-sm hover:bg-gray-50 transition-colors" data-testid="btn-load-more">
          Load More Matches
        </button>
      </div>
    </div>
  );
}
