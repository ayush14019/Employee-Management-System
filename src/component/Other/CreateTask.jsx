import React from "react";


const AdminDashboard = () => {
  return (
    <div className=" w-full  bg-[#0a0a0a]">
     

      <div className="mt-10 mb-10 max-w-7xl mx-auto">
        <div className="mb-5">
          <h1 className="text-3xl font-bold text-white mb-2">
            Create New Task
          </h1>
          <p className="text-gray-400">
            Assign tasks to team members and track progress
          </p>
        </div>

        <div className="bg-linear-to-br from-[#1a1a1a] to-[#252525] rounded-2xl p-8 shadow-2xl border border-gray-800">
          <form className="w-full flex flex-wrap gap-8">
            <div className="flex-1 min-w-[300px] space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Task Title
                </label>
                <input
                  className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-[#0f0f0f] border border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  type="text"
                  placeholder="Enter your task"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Date
                </label>
                <input
                  className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-[#0f0f0f] border border-gray-700 text-white focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  type="date"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Assign To
                </label>
                <input
                  className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-[#0f0f0f] border border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  type="text"
                  placeholder="Employee name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Category
                </label>
                <input
                  className="w-full text-sm py-3 px-4 rounded-xl outline-none bg-[#0f0f0f] border border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  type="text"
                  placeholder="design, dev, etc"
                />
              </div>
            </div>

            <div className="flex-1 min-w-[300px] flex flex-col">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                className="w-full flex-1 min-h-[280px] text-sm py-3 px-4 rounded-xl outline-none bg-[#0f0f0f] border border-gray-700 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                placeholder="Enter task description..."
              ></textarea>

              <button
                type="submit"
                className="bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 py-4 px-6 rounded-xl text-md font-medium mt-6 w-full transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-500/25 text-white"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>

       
      </div>
    </div>
  );
};

export default AdminDashboard;