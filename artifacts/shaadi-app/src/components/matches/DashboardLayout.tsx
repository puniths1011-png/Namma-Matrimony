import Navbar from "./Navbar";

interface DashboardLayoutProps {
  setIsLoggedIn: (value: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

export default function DashboardLayout({ setIsLoggedIn, children, className = "" }: DashboardLayoutProps) {
  return (
    <div className={`min-h-screen bg-[#FFF8F5] flex flex-col ${className}`}>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
