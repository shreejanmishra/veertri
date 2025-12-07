import { useState } from "react";
import { User, Mail, Lock, CreditCard, Bell, Tv, LogOut } from "lucide-react";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("account");

  const profiles = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://i.pravatar.cc/150?img=1",
      isKids: false,
    },
    {
      id: 2,
      name: "Jane Doe",
      avatar: "https://i.pravatar.cc/150?img=2",
      isKids: false,
    },
    {
      id: 3,
      name: "Kids",
      avatar: "https://i.pravatar.cc/150?img=3",
      isKids: true,
    },
  ];

  return (
    <div className="bg-black min-h-screen pt-20 px-4 md:px-16">
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <h1 className="text-white text-4xl font-bold mb-8">Account Settings</h1>

        {/* Navigation Tabs */}
        <div className="flex gap-8 border-b border-gray-700 mb-8">
          <button
            onClick={() => setActiveTab("account")}
            className={`pb-4 transition ${
              activeTab === "account"
                ? "text-white border-b-2 border-red-600"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Account
          </button>
          <button
            onClick={() => setActiveTab("profiles")}
            className={`pb-4 transition ${
              activeTab === "profiles"
                ? "text-white border-b-2 border-red-600"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Profiles
          </button>
          <button
            onClick={() => setActiveTab("subscription")}
            className={`pb-4 transition ${
              activeTab === "subscription"
                ? "text-white border-b-2 border-red-600"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Subscription
          </button>
        </div>

        {/* Account Tab */}
        {activeTab === "account" && (
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Mail className="text-gray-400" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">john.doe@example.com</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-400 transition">
                  Change
                </button>
              </div>
            </div>

            {/* Password */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Lock className="text-gray-400" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Password</h3>
                    <p className="text-gray-400">••••••••</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-400 transition">
                  Change
                </button>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Bell className="text-gray-400" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Notifications
                    </h3>
                    <p className="text-gray-400">
                      Manage notification preferences
                    </p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-400 transition">
                  Configure
                </button>
              </div>
            </div>

            {/* Sign Out */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <LogOut className="text-gray-400" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Sign out of all devices
                    </h3>
                    <p className="text-gray-400">
                      Sign out from all active sessions
                    </p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-400 transition">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Profiles Tab */}
        {activeTab === "profiles" && (
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {profiles.map((profile) => (
                <div
                  key={profile.id}
                  className="text-center group cursor-pointer"
                >
                  <div className="relative mb-4">
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="w-32 h-32 rounded-md mx-auto group-hover:ring-4 ring-white transition"
                    />
                    {profile.isKids && (
                      <span className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded">
                        Kids
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold mb-2">
                    {profile.name}
                  </h3>
                  <button className="text-blue-500 hover:text-blue-400 transition text-sm">
                    Edit
                  </button>
                </div>
              ))}

              {/* Add Profile */}
              <div className="text-center group cursor-pointer">
                <div className="w-32 h-32 rounded-md mx-auto bg-gray-800 hover:bg-gray-700 transition flex items-center justify-center mb-4">
                  <User size={48} className="text-gray-500" />
                </div>
                <h3 className="text-white font-semibold">Add Profile</h3>
              </div>
            </div>
          </div>
        )}

        {/* Subscription Tab */}
        {activeTab === "subscription" && (
          <div className="space-y-6">
            {/* Current Plan */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <Tv className="text-gray-400" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Current Plan
                    </h3>
                    <p className="text-gray-400">Premium - 4K + HDR</p>
                  </div>
                </div>
                <span className="text-white text-xl font-bold">$15.99/mo</span>
              </div>
              <div className="text-gray-400 text-sm space-y-2">
                <p>✓ Watch on 4 devices at once</p>
                <p>✓ Ultra HD available</p>
                <p>✓ Download on 4 devices</p>
              </div>
              <button className="mt-4 text-blue-500 hover:text-blue-400 transition">
                Change Plan
              </button>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-900 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CreditCard className="text-gray-400" size={24} />
                  <div>
                    <h3 className="text-white font-semibold mb-1">
                      Payment Method
                    </h3>
                    <p className="text-gray-400">•••• •••• •••• 4242</p>
                  </div>
                </div>
                <button className="text-blue-500 hover:text-blue-400 transition">
                  Update
                </button>
              </div>
            </div>

            {/* Billing History */}
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4">Billing History</h3>
              <div className="space-y-3 text-gray-400 text-sm">
                <div className="flex justify-between">
                  <span>December 1, 2025</span>
                  <span>$15.99</span>
                </div>
                <div className="flex justify-between">
                  <span>November 1, 2025</span>
                  <span>$15.99</span>
                </div>
                <div className="flex justify-between">
                  <span>October 1, 2025</span>
                  <span>$15.99</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
