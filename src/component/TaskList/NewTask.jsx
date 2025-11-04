// import React from 'react'

// const NewTask = ({data}) => {
//   return (
//     <div className="shrink-0 h-full w-[348px] p-5 bg-blue-400 rounded-xl">
//       <div className="flex justify-between items-center ">
//         <h3 className="bg-red-500 text-sm px-3 py-1 rounded">
//           {data.category}
//         </h3>
//         <h4 className="text-sm">{data.taskDate}</h4>
//       </div>
//       <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
//       <p className="text-base mt-10">{data.taskDescription}</p>
//       <div className="mt-4">
//         <button className="bg-green-500 py-1 px-2 text-sm">Accept Task</button>
//       </div>
//     </div>
//   );
// }

// export default NewTask


import React from "react";
import { CheckCircle } from "lucide-react";

const NewTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[348px] p-5 rounded-2xl bg-linear-to-br from-red-500 to-rose-600 text-white shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="bg-white/20 text-sm px-3 py-1 rounded-md font-medium">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-90">{data.taskDate}</h4>
      </div>

      {/* Title */}
      <h2 className="mt-2 text-xl font-semibold">{data.taskTitle}</h2>

      {/* Description */}
      <p className="text-sm opacity-90 mt-4 leading-relaxed">
        {data.taskDescription}
      </p>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full flex items-center justify-center gap-2 text-white bg-red-600 font-semibold py-2 rounded-md text-sm hover:bg-red-700 transition">
          <CheckCircle size={20} />
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;

