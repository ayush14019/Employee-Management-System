import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const addtask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = userData.employees;

    data.forEach((elem) => {
      if (assignTo == elem.firstName) {
        elem.tasks.push(addtask);
        elem.taskNumbers.newTask = elem.taskNumbers.newTask + 1;
      }
    });

    setUserData({ ...userData });

    // Reset form
    setTaskTitle("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
  };

  return (
    <div className="w-full bg-linear-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] min-h-screen">
      <div className="mt-5 md:mt-10 mb-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">
                Create New Task
              </h1>
              <p className="text-xs md:text-sm text-gray-400 mt-0.5">
                Assign tasks to team members and track progress
              </p>
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-linear-to-br from-[#1a1a1a] via-[#1f1f1f] to-[#252525] rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl border border-gray-800/50 backdrop-blur-sm">
          <form
            onSubmit={submitHandler}
            className="w-full flex flex-col lg:flex-row gap-6 md:gap-8"
          >
            {/* Left Column */}
            <div className="flex-1 space-y-5">
              {/* Task Title */}
              <div className="group">
                <label className=" text-xs md:text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-emerald-500 rounded-full"></span>
                  Task Title
                </label>
                <div className="relative">
                  <input
                    required
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    className="w-full text-sm py-3 md:py-3.5 px-4 md:px-5 rounded-xl outline-none bg-[#0f0f0f]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:bg-[#0f0f0f] transition-all"
                    type="text"
                    placeholder="e.g., Design landing page"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="group">
                <label className=" text-xs md:text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-blue-500 rounded-full"></span>
                  Due Date
                </label>
                <div className="relative">
                  <input
                    required
                    value={taskDate}
                    onChange={(e) => setTaskDate(e.target.value)}
                    className="w-full text-sm py-3 md:py-3.5 px-4 md:px-5 rounded-xl outline-none bg-[#0f0f0f]/80 border border-gray-700/50 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-[#0f0f0f] transition-all"
                    type="date"
                  />
                </div>
              </div>

              {/* Assign To */}
              <div className="group">
                <label className=" text-xs md:text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-purple-500 rounded-full"></span>
                  Assign To
                </label>
                <div className="relative">
                  <input
                    required
                    value={assignTo}
                    onChange={(e) => setAssignTo(e.target.value)}
                    className="w-full text-sm py-3 md:py-3.5 px-4 md:px-5 rounded-xl outline-none bg-[#0f0f0f]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:bg-[#0f0f0f] transition-all"
                    type="text"
                    placeholder="Employee first name"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="group">
                <label className=" text-xs md:text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                  <span className="w-1 h-4 bg-orange-500 rounded-full"></span>
                  Category
                </label>
                <div className="relative">
                  <input
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full text-sm py-3 md:py-3.5 px-4 md:px-5 rounded-xl outline-none bg-[#0f0f0f]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:bg-[#0f0f0f] transition-all"
                    type="text"
                    placeholder="e.g., design, dev, marketing"
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 flex flex-col">
              <label className=" text-xs md:text-sm font-semibold text-gray-300 mb-2 flex items-center gap-2">
                <span className="w-1 h-4 bg-pink-500 rounded-full"></span>
                Task Description
              </label>
              <div className="relative flex-1 flex flex-col">
                <textarea
                  required
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="w-full flex-1 min-h-[200px] md:min-h-[280px] text-sm py-3 md:py-3.5 px-4 md:px-5 rounded-xl outline-none bg-[#0f0f0f]/80 border border-gray-700/50 text-white placeholder-gray-500 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 focus:bg-[#0f0f0f] transition-all resize-none"
                  placeholder="Describe the task in detail...

What needs to be done?
Any specific requirements?
Expected deliverables?"
                ></textarea>
                <div className="absolute bottom-3 right-3 text-xs text-gray-500">
                  {taskDescription.length} characters
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 py-3.5 md:py-4 px-6 rounded-xl text-sm md:text-base font-semibold mt-5 md:mt-6 w-full transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-emerald-500/25 text-white overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 transition-transform group-hover:rotate-90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Create Task
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-emerald-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              {/* Quick Tips */}
              <div className="mt-4 p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                <p className="text-xs text-blue-400 flex items-start gap-2">
                  <svg
                    className="w-4 h-4 mt-0.5 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>
                    <strong>Tip:</strong> Use the employee's first name exactly
                    as it appears in the system
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
