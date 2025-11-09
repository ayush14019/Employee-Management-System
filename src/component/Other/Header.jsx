const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInuser", "");
    props.changeUser(null);
  };

  // Get display name based on data
  const getDisplayName = () => {
    if (!props.data) return "Admin";
    return props.data.firstName || "Employee";
  };

  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (!props.data) return "Admin Dashboard";

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Get role badge
  const getRoleBadge = () => {
    if (!props.data) {
      return (
        <span className="px-2.5 py-1 bg-linear-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-xs font-semibold text-purple-300 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Admin
        </span>
      );
    }
    return (
      <span className="px-2.5 py-1 bg-linear-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-xs font-semibold text-blue-300 flex items-center gap-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
        Employee
      </span>
    );
  };

  // Get current date
  const getCurrentDate = () => {
    const options = { weekday: "short", month: "short", day: "numeric" };
    return new Date().toLocaleDateString("en-US", options);
  };

  return (
    <div className="relative">
      {/* Animated background linear */}
      <div className="absolute inset-0 bg-linear-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 rounded-2xl blur-xl"></div>

      <div className="relative flex items-center justify-between bg-linear-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#252525] rounded-2xl p-4 md:p-5 border border-gray-800/50 shadow-2xl backdrop-blur-sm flex-wrap gap-4">
        {/* Left Section */}
        <div className="flex items-center  md:gap-4 flex-1 min-w-[200px]">
          {/* Avatar with animated ring */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-linear-to-r from-emerald-500 via-blue-500 to-purple-500 animate-spin-slow blur-sm"></div>
            <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-xl shadow-emerald-500/40 ring-4 ring-[#1a1a1a]">
              {props.data ? (
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {getDisplayName().charAt(0).toUpperCase()}
                </span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="text-white"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              )}
            </div>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs md:text-sm text-gray-400 font-medium">
                {getGreeting()}
              </p>
              {getRoleBadge()}
            </div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold bg-linear-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent flex items-center gap-2">
              {getDisplayName()}
              <span className="text-2xl">👋</span>
            </h1>
            <p className="text-xs text-gray-500 mt-0.5 flex items-center md:gap-1.5">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              {getCurrentDate()}
            </p>
          </div>
        </div>

        {/* Right Section - Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Notifications (Optional) */}
          <button className="hidden sm:flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-gray-600 transition-all hover:scale-105 active:scale-95 relative group">
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-linear-to-br from-red-500 to-red-600 rounded-full text-xs font-bold text-white flex items-center justify-center shadow-lg shadow-red-500/50 ring-2 ring-[#1a1a1a]">
              3
            </span>
          </button>

          {/* Logout Button */}
          <button
            className="group relative bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-500/30 overflow-hidden"
            onClick={logOutUser}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="hidden sm:inline">Log Out</span>
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;