import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded  mt-12 mb-5 max-w-7xl mx-auto text-white">
      <div className="bg-red-400 py-2 mb-2 px-4 flex justify-between rounded">
        <h2 className="w-1/5 text-lg font-medium">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>
      <div className=" ">
        {authData.employees.map((elem, id) => {
          return (
            <div className="border border-emerald-500 py-2 mb-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5 text-white ">
                {elem.firstName}
              </h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">
                {elem.taskNumbers.newTask}
              </h3>
              <h5 className=" text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskNumbers.active}
              </h5>
              <h5 className=" text-lg font-medium w-1/5 text-white">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className=" text-lg font-medium w-1/5 text-red-600">
                {elem.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;

// import React from "react";

// const AllTask = () => {
//   return (
//     <div className="mt-12 mb-5 max-w-7xl mx-auto">
//       <div className="bg-linear-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-2xl mx-1 border border-gray-800 shadow-xl">
//         <div className="mb-4">
//           <h2 className="text-2xl font-bold text-white">All Tasks</h2>
//           <p className="text-gray-400 text-sm mt-1">
//             Overview of all assigned tasks
//           </p>
//         </div>

//         <div className="space-y-3 max-h-[250px] overflow-auto pr-2 custom-scrollbar">
//           <div className="bg-linear-to-r from-red-500/10 to-red-600/10 border border-red-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all">
//             <div className="flex items-center gap-4 flex-1">
//               <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-semibold">
//                 A
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold">Ayush</h3>
//                 <p className="text-gray-400 text-sm">Make a UI Design</p>
//               </div>
//             </div>
//             <span className="px-4 py-1.5 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium">
//               Pending
//             </span>
//           </div>

//           <div className="bg-linear-to-r from-green-500/10 to-green-600/10 border border-green-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all">
//             <div className="flex items-center gap-4 flex-1">
//               <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-semibold">
//                 A
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold">Ayush</h3>
//                 <p className="text-gray-400 text-sm">Make a UI Design</p>
//               </div>
//             </div>
//             <span className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
//               Completed
//             </span>
//           </div>

//           <div className="bg-linear-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all">
//             <div className="flex items-center gap-4 flex-1">
//               <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold">
//                 A
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold">Ayush</h3>
//                 <p className="text-gray-400 text-sm">Make a UI Design</p>
//               </div>
//             </div>
//             <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">
//               In Progress
//             </span>
//           </div>

//           <div className="bg-linear-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
//             <div className="flex items-center gap-4 flex-1">
//               <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-semibold">
//                 A
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold">Ayush</h3>
//                 <p className="text-gray-400 text-sm">Make a UI Design</p>
//               </div>
//             </div>
//             <span className="px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium">
//               Review
//             </span>
//           </div>

//           <div className="bg-linear-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
//             <div className="flex items-center gap-4 flex-1">
//               <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-semibold">
//                 A
//               </div>
//               <div>
//                 <h3 className="text-white font-semibold">Ayush</h3>
//                 <p className="text-gray-400 text-sm">Make a UI Design</p>
//               </div>
//             </div>
//             <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm font-medium">
//               On Hold
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllTask;
