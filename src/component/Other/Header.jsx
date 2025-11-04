const Header = ({ data }) => {
  

  const logOutUser = () => {
    localStorage.setItem("loggedInuser","");
    window.location.reload()
  }
  return (
    <div className="flex items-center justify-between bg-linear-to-r from-[#1a1a1a] to-[#252525] rounded-2xl p-3 border border-gray-800 shadow-xl">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-linear-to-r from-emerald-500 to-emerald-700 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/30">
          {/* 👤 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="currentColor"
          >
            <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13Z"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm text-gray-400 font-medium">Welcome back,</p>
          <h1 className="text-2xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
            username
          </h1>
        </div>
      </div>

      <button
        className="group relative bg-linear-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-red-500/25 overflow-hidden"
        onClick={logOutUser}
      >
        <span className="relative z-10 flex items-center gap-2">
          <svg
            className="w-4 h-4 transition-transform group-hover:rotate-12"
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
          Log Out
        </span>
        <div className="absolute inset-0 bg-linear-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  );
};

export default Header;
