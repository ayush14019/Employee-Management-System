// import React from 'react'

// const AllTask = () => {
//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5 h-50 overflow-auto'>
//         <div className='bg-red-400 py-2 mb-2 px-4 flex justify-between rounded'>
//             <h2>Ayush</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className='bg-green-400 py-2 mb-2 px-4 flex justify-between rounded'>
//             <h2>Ayush</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className='bg-blue-400 py-2 mb-2 px-4 flex justify-between rounded'>
//             <h2>Ayush</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className='bg-purple-400 py-2 mb-2 px-4 flex justify-between rounded'>
//             <h2>Ayush</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//         <div className='bg-yellow-400 py-2 mb-2 px-4 flex justify-between rounded'>
//             <h2>Ayush</h2>
//             <h3>Make a UI Design</h3>
//             <h5>Status</h5>
//         </div>
//     </div>
//   )
// }

// export default AllTask


// import React from "react";

// const AllTask = () => {
//   return (
//     <div className=" bg-linear-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-2xl mt-8 border border-gray-800 shadow-xl">
//       <div className="mb-4">
//         <h2 className="text-2xl font-bold text-white">All Tasks</h2>
//         <p className="text-gray-400 text-sm mt-1">
//           Overview of all assigned tasks
//         </p>
//       </div>

//       <div className="space-y-3 max-h-[300px] overflow-auto pr-2 custom-scrollbar">
//         <div className="bg-linear-to-br from-red-500/10 to-red-600/10 border border-red-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all">
//           <div className="flex items-center gap-4 flex-1">
//             <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-semibold">
//               A
//             </div>
//             <div>
//               <h3 className="text-white font-semibold">Ayush</h3>
//               <p className="text-gray-400 text-sm">Make a UI Design</p>
//             </div>
//           </div>
//           <span className="px-4 py-1.5 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium">
//             Pending
//           </span>
//         </div>

//         <div className="bg-linear-to-br from-green-500/10 to-green-600/10 border border-green-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all">
//           <div className="flex items-center gap-4 flex-1">
//             <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-semibold">
//               A
//             </div>
//             <div>
//               <h3 className="text-white font-semibold">Ayush</h3>
//               <p className="text-gray-400 text-sm">Make a UI Design</p>
//             </div>
//           </div>
//           <span className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
//             Completed
//           </span>
//         </div>

//         <div className="bg-linear-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all">
//           <div className="flex items-center gap-4 flex-1">
//             <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold">
//               A
//             </div>
//             <div>
//               <h3 className="text-white font-semibold">Ayush</h3>
//               <p className="text-gray-400 text-sm">Make a UI Design</p>
//             </div>
//           </div>
//           <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">
//             In Progress
//           </span>
//         </div>

//         <div className="bg-linear-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
//           <div className="flex items-center gap-4 flex-1">
//             <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-semibold">
//               A
//             </div>
//             <div>
//               <h3 className="text-white font-semibold">Ayush</h3>
//               <p className="text-gray-400 text-sm">Make a UI Design</p>
//             </div>
//           </div>
//           <span className="px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium">
//             Review
//           </span>
//         </div>

//         <div className="bg-linear-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
//           <div className="flex items-center gap-4 flex-1">
//             <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-semibold">
//               A
//             </div>
//             <div>
//               <h3 className="text-white font-semibold">Ayush</h3>
//               <p className="text-gray-400 text-sm">Make a UI Design</p>
//             </div>
//           </div>
//           <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm font-medium">
//             On Hold
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllTask;

import React from "react";

const AllTask = () => {
  return (
    <div className="mt-12 mb-5 max-w-7xl mx-auto">
      <div className="bg-linear-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-2xl mx-1 border border-gray-800 shadow-xl">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-white">All Tasks</h2>
          <p className="text-gray-400 text-sm mt-1">
            Overview of all assigned tasks
          </p>
        </div>

        <div className="space-y-3 max-h-[250px] overflow-auto pr-2 custom-scrollbar">
          <div className="bg-linear-to-r from-red-500/10 to-red-600/10 border border-red-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-red-500/20 transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-semibold">
                A
              </div>
              <div>
                <h3 className="text-white font-semibold">Ayush</h3>
                <p className="text-gray-400 text-sm">Make a UI Design</p>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-red-500/20 text-red-400 rounded-lg text-sm font-medium">
              Pending
            </span>
          </div>

          <div className="bg-linear-to-r from-green-500/10 to-green-600/10 border border-green-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-green-500/20 transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-semibold">
                A
              </div>
              <div>
                <h3 className="text-white font-semibold">Ayush</h3>
                <p className="text-gray-400 text-sm">Make a UI Design</p>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-green-500/20 text-green-400 rounded-lg text-sm font-medium">
              Completed
            </span>
          </div>

          <div className="bg-linear-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold">
                A
              </div>
              <div>
                <h3 className="text-white font-semibold">Ayush</h3>
                <p className="text-gray-400 text-sm">Make a UI Design</p>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-blue-500/20 text-blue-400 rounded-lg text-sm font-medium">
              In Progress
            </span>
          </div>

          <div className="bg-linear-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-purple-500/20 transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-semibold">
                A
              </div>
              <div>
                <h3 className="text-white font-semibold">Ayush</h3>
                <p className="text-gray-400 text-sm">Make a UI Design</p>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-purple-500/20 text-purple-400 rounded-lg text-sm font-medium">
              Review
            </span>
          </div>

          <div className="bg-linear-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30 py-4 px-5 flex justify-between items-center rounded-xl hover:shadow-lg hover:shadow-yellow-500/20 transition-all">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 font-semibold">
                A
              </div>
              <div>
                <h3 className="text-white font-semibold">Ayush</h3>
                <p className="text-gray-400 text-sm">Make a UI Design</p>
              </div>
            </div>
            <span className="px-4 py-1.5 bg-yellow-500/20 text-yellow-400 rounded-lg text-sm font-medium">
              On Hold
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTask;