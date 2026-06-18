import profile2 from "@/assets/images/profile2.png";
import profile3 from "@/assets/images/profile3.png";
import profile4 from "@/assets/images/profile4.png";
import profile5 from "@/assets/images/profile5.png";
import profile6 from "@/assets/images/profile6.png";

export default function RightStrip() {
  const thumbs = [
    { id: 1, src: profile2 },
    { id: 2, src: profile3 },
    { id: 3, src: profile4 },
    { id: 4, src: profile5 },
    { id: 5, src: profile6 },
    { id: 6, src: profile2 },
    { id: 7, src: profile3 },
    { id: 8, src: profile4 },
  ];

  return (
    <div className="hidden lg:block w-[60px] sticky top-[120px]" data-testid="right-strip">
      <div className="bg-white/40 backdrop-blur-md border border-white/60 rounded-full p-2 flex flex-col items-center gap-3 shadow-sm py-4">
        <div className="text-[10px] font-medium text-gray-500 text-center mb-1 leading-tight">Similar<br/>Matches</div>
        
        {thumbs.map((thumb) => (
          <div key={thumb.id} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform hover:border-[#c41230]" data-testid={`thumb-${thumb.id}`}>
            <img src={thumb.src} alt={`Similar match ${thumb.id}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
