import React from "react";
import {
  ClipboardList,
  CheckCircle2,
  ThumbsUp,
  AlertTriangle,
} from "lucide-react";

const TaskNumberLists = ({ data }) => {
  const cards = [
    {
      title: "New Task",
      value: data.taskNumbers.newTask,
      color: "from-rose-500 to-rose-600",
      icon: <ClipboardList size={28} />,
    },
    {
      title: "Completed Task",
      value: data.taskNumbers.completed,
      color: "from-blue-500 to-blue-600",
      icon: <CheckCircle2 size={28} />,
    },
    {
      title: "Accepted Task",
      value: data.taskNumbers.active,
      color: "from-green-500 to-green-600",
      icon: <ThumbsUp size={28} />,
    },
    {
      title: "Failed Task",
      value: data.taskNumbers.failed,
      color: "from-yellow-400 to-yellow-500",
      icon: <AlertTriangle size={28} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`bg-linear-to-br ${card.color} p-6 rounded-2xl shadow-md text-white flex flex-col justify-between transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl">{card.icon}</div>
            <h2 className="text-3xl font-bold">{card.value}</h2>
          </div>
          <h3 className="text-lg font-medium tracking-wide">{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default TaskNumberLists;