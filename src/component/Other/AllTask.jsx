import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-3 md:p-5 rounded-xl md:rounded-2xl mt-8 md:mt-5 mb-5 max-w-7xl mx-auto text-white">
      {/* Header - Hidden on mobile, shows on tablet+ */}
      <div className="hidden md:flex bg-linear-to-r from-red-500 to-red-600 py-3 mb-3 px-4 justify-between rounded-lg shadow-lg">
        <h2 className="w-1/5 text-sm lg:text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-sm lg:text-lg font-medium text-center">
          New Task
        </h3>
        <h5 className="w-1/5 text-sm lg:text-lg font-medium text-center">
          Active Task
        </h5>
        <h5 className="w-1/5 text-sm lg:text-lg font-medium text-center">
          Completed
        </h5>
        <h5 className="w-1/5 text-sm lg:text-lg font-medium text-center">
          Failed
        </h5>
      </div>

      {/* Mobile Title */}
      <div className="md:hidden mb-4">
        <h2 className="text-xl font-bold text-white">All Employees</h2>
        <p className="text-gray-400 text-sm">Task overview</p>
      </div>

      {/* Employee List */}
      <div className="space-y-3">
        {userData.employees.map((elem, index) => {
          return (
            <div key={elem.id || index}>
              {/* Desktop View */}
              <div className="hidden md:flex border border-emerald-500 py-3 px-4 justify-between rounded-lg hover:bg-emerald-500/5 transition-all">
                <h2 className="text-sm lg:text-lg font-medium w-1/5 text-white">
                  {elem.firstName}
                </h2>
                <h3 className="text-sm lg:text-lg font-medium w-1/5 text-blue-400 text-center">
                  {elem.taskNumbers.newTask}
                </h3>
                <h5 className="text-sm lg:text-lg font-medium w-1/5 text-yellow-400 text-center">
                  {elem.taskNumbers.active}
                </h5>
                <h5 className="text-sm lg:text-lg font-medium w-1/5 text-green-400 text-center">
                  {elem.taskNumbers.completed}
                </h5>
                <h5 className="text-sm lg:text-lg font-medium w-1/5 text-red-400 text-center">
                  {elem.taskNumbers.failed}
                </h5>
              </div>

              {/* Mobile View - Card Layout */}
              <div className="md:hidden bg-linear-to-br from-[#252525] to-[#1a1a1a] border border-emerald-500 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-700">
                  <div className="w-10 h-10 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">
                    {elem.firstName.charAt(0).toUpperCase()}
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    {elem.firstName}
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">New Tasks</p>
                    <p className="text-2xl font-bold text-blue-400">
                      {elem.taskNumbers.newTask}
                    </p>
                  </div>

                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Active</p>
                    <p className="text-2xl font-bold text-yellow-400">
                      {elem.taskNumbers.active}
                    </p>
                  </div>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Completed</p>
                    <p className="text-2xl font-bold text-green-400">
                      {elem.taskNumbers.completed}
                    </p>
                  </div>

                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Failed</p>
                    <p className="text-2xl font-bold text-red-400">
                      {elem.taskNumbers.failed}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;