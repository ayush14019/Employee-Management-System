// import React from "react";

// const AcceptTask = ({data}) => {
//   return (
//     <div className="shrink-0 h-full w-[348px] p-5  bg-red-400 rounded-xl">
//       <div className="flex justify-between items-center ">
//         <h3 className="bg-red-500 text-sm px-3 py-1 rounded">
//           {data.category}
//         </h3>
//         <h4 className="text-sm">{data.taskDate}</h4>
//       </div>
//       <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
//       <p className="text-base mt-10">{data.taskDescription}</p>
//       <div className="flex justify-between mt-4">
//         <button className="bg-green-500 py-1 px-2 text-sm">
//           Mark as Completed
//         </button>
//         <button className="bg-red-500 py-1 px-2 text-sm">Mark as Failed</button>
//       </div>
//     </div>
//   );
// };

// export default AcceptTask;



import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const AcceptTask = ({ data }) => {
  return (
    <div className="shrink-0 w-[348px]  p-5 rounded-2xl bg-linear-to-br from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="bg-white/20 text-sm px-3 py-1 rounded-md font-medium">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-90">{data.taskDate}</h4>
      </div>

      {/* Title */}
      <div className="flex items-center gap-2 ">
        <FaThumbsUp className="text-white/90" size={18} />
        <h2 className="mt-1 text-nowrap text-xl font-semibold">{data.taskTitle}</h2>
      </div>

      {/* Description */}
      <p className="text-sm opacity-90 mt-4 leading-relaxed">
        {data.taskDescription}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-green-700 text-white font-semibold py-1.5 px-3 rounded-md text-sm hover:bg-green-800 transition">
          Mark as Completed
        </button>
        <button className="bg-red-700 text-white font-semibold py-1.5 px-3 rounded-md text-sm hover:bg-red-800 transition">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;




