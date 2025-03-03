import {
  Avatar, Button, Input, Switch
} from "@heroui/react";
import { useApp } from "../context/AppContext";
import { useState} from "react";
import { Search, Moon, Settings, User, Home, FileText, Bell, MessageSquare, HelpCircle, LogOut } from "lucide-react";

// Navigation items for the sidebar
const navigationItems = [
  { name: "Dashboard", href: "/dashboard", icon: <Home size={20} /> },
  { name: "Profile", href: "/profile", icon: <User size={20} /> },
  { name: "Documents", href: "/documents", icon: <FileText size={20} /> },
  { name: "Notifications", href: "/notifications", icon: <Bell size={20} /> },
  { name: "Messages", href: "/messages", icon: <MessageSquare size={20} /> },
  { name: "Settings", href: "/settings", icon: <Settings size={20} /> },
  { name: "Help & Support", href: "/help", icon: <HelpCircle size={20} /> }
];

export default function UserMenu() {
  const { user, logout, isLoading } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Check if we're on the portal page to hide the Partner Portal link
  const isPortalPage = window.location.pathname === "/portal";

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = async () => {
    console.log("Logout initiated");
    setIsLoggingOut(true);
    try {
      await logout();
      // Redirect will be handled by the logout function in AppContext
    } catch (error) {
      console.error("Logout failed:", error);
      setIsLoggingOut(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  // Format the user's full name
  const getUserFullName = () => {
    if (!user) return "Guest";

    if (user.firstName && user.lastName) {
      return `${user.firstName} ${user.lastName}`;
    } else if (user.firstName) {
      return user.firstName;
    } else if (user.lastName) {
      return user.lastName;
    } else {
      return user.username || "User";
    }
  };

  // Format company name
  const getCompanyName = () => {
    return user?.companyName || "";
  };

  // Sidebar component
  const Sidebar = () => (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-lg border-l border-gray-200 dark:border-gray-700 transform transition-transform duration-300 ease-in-out z-50 ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Welcome, {getUserFullName()}
          </h2>
          <button
            onClick={toggleSidebar}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {user && (
          <div className="mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="flex items-center mb-3">
              <Avatar
                isBordered
                color="primary"
                name={getUserFullName()}
                size="lg"
                className="mr-3"
              />
              <div>
                <p className="font-bold text-gray-800 dark:text-white">{getUserFullName()}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                {getCompanyName() && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">{getCompanyName()}</p>
                )}
              </div>
            </div>
          </div>
        )}

        <div className="mb-6">
          <Input
            startContent={<Search size={18} />}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </div>

        <nav className="flex-grow">
          <ul>
            {!isPortalPage && (
              <li className="mb-2">
                <a
                  href="/portal"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <Home size={20} className="mr-3" />
                  Partner Portal
                </a>
              </li>
            )}

            {navigationItems.map((item) => (
              <li key={item.name} className="mb-2">
                <a
                  href={item.href}
                  className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between p-3 mb-4">
            <span className="text-gray-700 dark:text-gray-300 flex items-center">
              <Moon size={20} className="mr-3" />
              Dark Mode
            </span>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
            />
          </div>

          {/* Logout button - ensure it's visible and functional */}
          {user && (
            <button
              onClick={handleLogout}
              disabled={isLoading || isLoggingOut}
              className="flex items-center w-full p-3 rounded-lg text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <LogOut size={20} className="mr-3" />
              {isLoading || isLoggingOut ? 'Logging out...' : 'Log Out'}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Sidebar Toggle Button
  const SidebarToggle = () => (
    <Button
      isIconOnly
      variant="light"
      onPress={toggleSidebar}
      className="fixed top-4 right-4 z-40 bg-white dark:bg-gray-800 shadow-md rounded-full"
      aria-label="Toggle Navigation Sidebar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </Button>
  );

  // Render sidebar, logout overlay, and toggle
  return (
    <>
      {isLoggingOut && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-[60] flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center">
            <svg className="animate-spin h-12 w-12 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Logging Out...</h3>
            <p className="text-gray-600 dark:text-gray-400">Please wait while we sign you out.</p>
          </div>
        </div>
      )}

      {/* The toggle button is always visible in a fixed position */}
      <SidebarToggle />

      {/* The sidebar */}
      <Sidebar />

      {/* Overlay to close sidebar when clicking outside */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
