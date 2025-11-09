import { CheckCircle2 } from "lucide-react";

const CompleteTask = ({ data }) => {
  return (
    <div className=" md:min-w-[348px] p-5 rounded-2xl bg-linear-to-br from-blue-500 to-sky-600 text-white shadow-lg hover:shadow-2xl transition-transform transform hover:scale-[1.02]">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="bg-white/20 text-sm px-3 py-1 rounded-md font-medium">
          {data.category}
        </h3>
        <h4 className="text-sm opacity-90">{data.taskDate}</h4>
      </div>

      {/* Title */}
      <h2 className="mt-2 text-xl text-nowrap font-semibold">
        {data.taskTitle}
      </h2>

      {/* Description */}
      <p className="text-sm opacity-90 mt-4 leading-relaxed h-11">
        {data.taskDescription}
      </p>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-semibold py-2 rounded-md text-sm hover:bg-blue-800 transition">
          <CheckCircle2 size={20} />
          Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
