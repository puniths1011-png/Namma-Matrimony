import { useState } from "react";
import { Link } from "wouter";
import DashboardLayout from "@/components/matches/DashboardLayout";
import { Shield, Bell, Eye, Lock, Smartphone, Trash2, Check, ChevronRight } from "lucide-react";

interface SettingsPageProps {
  setIsLoggedIn: (value: boolean) => void;
}

const settingsSections = [
  { id: "account", label: "Account", icon: Shield },
  { id: "privacy", label: "Privacy", icon: Eye },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Lock },
];

const inputCls = "w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#8B1A4A]/30 focus:border-[#8B1A4A] transition-all";
const labelCls = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1";

function ToggleRow({ label, desc, defaultOn = false }: { label: string; desc?: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
      <div>
        <p className="text-sm font-medium text-gray-800">{label}</p>
        {desc && <p className="text-xs text-gray-400 mt-0.5">{desc}</p>}
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${on ? "bg-[#8B1A4A]" : "bg-gray-200"}`}
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${on ? "translate-x-6" : "translate-x-1"}`} />
      </button>
    </div>
  );
}

function AccountSettings() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className={labelCls}>Full Name</label><input className={inputCls} defaultValue="Priya Sharma" /></div>
          <div><label className={labelCls}>Email Address</label><input type="email" className={inputCls} defaultValue="priya.sharma@gmail.com" /></div>
          <div><label className={labelCls}>Mobile Number</label><input type="tel" className={inputCls} defaultValue="+91 98765 43210" /></div>
          <div><label className={labelCls}>Alternate Mobile</label><input type="tel" className={inputCls} placeholder="+91 XXXXX XXXXX" /></div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-4">Profile Preferences</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><label className={labelCls}>Interface Language</label>
            <select className={inputCls}><option>English</option><option>Hindi</option><option>Tamil</option><option>Telugu</option></select>
          </div>
          <div><label className={labelCls}>Currency</label>
            <select className={inputCls}><option>INR (₹)</option><option>USD ($)</option><option>GBP (£)</option></select>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all ${saved ? "bg-green-500 text-white" : "bg-[#8B1A4A] text-white hover:bg-[#7A1540]"}`}
          data-testid="btn-save-account"
        >
          {saved ? <><Check className="h-4 w-4" /> Saved!</> : "Save Changes"}
        </button>
        <button className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1.5 font-medium" data-testid="btn-deactivate">
          <Trash2 className="h-4 w-4" /> Deactivate Account
        </button>
      </div>
    </div>
  );
}

function PrivacySettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Profile Visibility</h3>
        <div className="space-y-1">
          {["Visible to All Members", "Visible to Premium Members Only", "Hidden (Not Searchable)"].map((o, i) => (
            <label key={o} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-50 border border-transparent hover:border-gray-100">
              <input type="radio" name="visibility" className="text-[#8B1A4A]" defaultChecked={i === 0} />
              <div>
                <p className="text-sm font-medium text-gray-800">{o}</p>
                {i === 0 && <p className="text-xs text-gray-400">All registered members can see your profile</p>}
                {i === 1 && <p className="text-xs text-gray-400">Only Gold & Diamond members can view your profile</p>}
                {i === 2 && <p className="text-xs text-gray-400">Your profile won't appear in search results</p>}
              </div>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Photo Privacy</h3>
        <div className="space-y-1">
          {["Open to All","Visible to Accepted Interests Only","Protected (Request Required)"].map((o, i) => (
            <label key={o} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-50">
              <input type="radio" name="photo_privacy" className="text-[#8B1A4A]" defaultChecked={i === 0} />
              <span className="text-sm text-gray-800">{o}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-2">Contact Number Visibility</h3>
        <div className="space-y-0">
          <ToggleRow label="Show mobile number to accepted contacts" defaultOn={true} />
          <ToggleRow label="Show WhatsApp number" defaultOn={false} />
          <ToggleRow label="Allow members to send messages first" defaultOn={true} />
        </div>
      </div>
    </div>
  );
}

function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-2">Email Notifications</h3>
        <ToggleRow label="New Match Alerts" desc="Get notified when new compatible profiles join" defaultOn={true} />
        <ToggleRow label="Interest Received" desc="When someone sends you an interest" defaultOn={true} />
        <ToggleRow label="Messages" desc="New chat messages and replies" defaultOn={true} />
        <ToggleRow label="Profile Views" desc="When someone views your profile" defaultOn={false} />
        <ToggleRow label="Weekly Digest" desc="Weekly summary of your matches" defaultOn={true} />
        <ToggleRow label="Promotional Offers" desc="Discounts and special offers" defaultOn={false} />
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-2">Push Notifications</h3>
        <ToggleRow label="Mobile Push Notifications" desc="Real-time alerts on your phone" defaultOn={true} />
        <ToggleRow label="SMS Alerts" desc="Important notifications via SMS" defaultOn={false} />
        <ToggleRow label="WhatsApp Updates" desc="Receive match updates on WhatsApp" defaultOn={false} />
      </div>
    </div>
  );
}

function SecuritySettings() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className="space-y-6">
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
        <Shield className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-green-800">Your account is secure</p>
          <p className="text-xs text-green-600 mt-0.5">Two-factor authentication is recommended for extra security</p>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Change Password</h3>
        {!showForm ? (
          <button onClick={() => setShowForm(true)} className="flex items-center gap-2 text-sm text-[#8B1A4A] font-semibold border border-[#8B1A4A]/30 px-4 py-2 rounded-lg hover:bg-[#8B1A4A]/5" data-testid="btn-change-password">
            <Lock className="h-4 w-4" /> Change Password
          </button>
        ) : (
          <div className="space-y-3 max-w-sm">
            <div><label className={labelCls}>Current Password</label><input type="password" className={inputCls} placeholder="••••••••" /></div>
            <div><label className={labelCls}>New Password</label><input type="password" className={inputCls} placeholder="••••••••" /></div>
            <div><label className={labelCls}>Confirm New Password</label><input type="password" className={inputCls} placeholder="••••••••" /></div>
            <div className="flex gap-3">
              <button className="bg-[#8B1A4A] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#7A1540]">Update Password</button>
              <button onClick={() => setShowForm(false)} className="text-gray-500 px-4 py-2 text-sm hover:text-gray-700">Cancel</button>
            </div>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Two-Factor Authentication</h3>
        <ToggleRow label="Enable 2FA via OTP" desc="Require OTP every time you log in" defaultOn={false} />
        <ToggleRow label="Login Alerts" desc="Get notified of new logins to your account" defaultOn={true} />
      </div>
      <div>
        <h3 className="text-sm font-bold text-gray-800 mb-3">Active Sessions</h3>
        <div className="border border-gray-100 rounded-xl overflow-hidden">
          {[
            { device: "Chrome on Windows", loc: "Mumbai, IN", current: true, time: "Now" },
            { device: "Safari on iPhone", loc: "Mumbai, IN", current: false, time: "2 hours ago" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3 p-4 border-b border-gray-50 last:border-0">
              <Smartphone className="h-5 w-5 text-gray-400 shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">{s.device}</p>
                <p className="text-xs text-gray-400">{s.loc} · {s.time}</p>
              </div>
              {s.current ? (
                <span className="text-xs bg-green-50 text-green-600 font-semibold px-2 py-0.5 rounded-full">Current</span>
              ) : (
                <button className="text-xs text-red-500 font-semibold hover:text-red-600">Sign out</button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SettingsPage({ setIsLoggedIn }: SettingsPageProps) {
  const [activeSection, setActiveSection] = useState("account");

  const renderContent = () => {
    switch (activeSection) {
      case "account": return <AccountSettings />;
      case "privacy": return <PrivacySettings />;
      case "notifications": return <NotificationSettings />;
      case "security": return <SecuritySettings />;
      default: return <AccountSettings />;
    }
  };

  return (
    <DashboardLayout setIsLoggedIn={setIsLoggedIn}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-testid="settings-page">
        <h1 className="text-2xl font-serif font-bold text-gray-900 mb-6">Settings</h1>
        <div className="flex gap-6">
          <aside className="w-52 shrink-0">
            <nav className="bg-white rounded-2xl border border-gray-100 shadow-sm p-2">
              {settingsSections.map((s) => {
                const Icon = s.icon;
                return (
                  <button
                    key={s.id}
                    onClick={() => setActiveSection(s.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all mb-1 ${
                      activeSection === s.id ? "bg-[#8B1A4A]/10 text-[#8B1A4A] font-semibold" : "text-gray-600 hover:bg-gray-50"
                    }`}
                    data-testid={`settings-tab-${s.id}`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    {s.label}
                    {activeSection === s.id && <ChevronRight className="h-4 w-4 ml-auto" />}
                  </button>
                );
              })}
              <div className="mt-2 pt-2 border-t border-gray-100">
                <Link to="/dashboard/profile">
                  <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all">
                    <Shield className="h-4 w-4" /> Edit Profile
                  </button>
                </Link>
              </div>
            </nav>
          </aside>
          <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-5 font-serif">
              {settingsSections.find((s) => s.id === activeSection)?.label} Settings
            </h2>
            {renderContent()}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
