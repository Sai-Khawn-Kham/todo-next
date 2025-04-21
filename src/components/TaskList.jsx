"use client";
import useTaskStore from "@/store/useTaskStore";
import React from "react";

const TaskList = ({ task: { id, title, is_done } }) => {
   const { removeTask, doneTask } = useTaskStore();

   const handleDelete = () => {
      removeTask(id)
   }

   const handleDone = () => {
      doneTask(id)
   }
   return (
      <div className="flex justify-between gap-2 bg-slate-50 hover:bg-slate-100 shadow hover:shadow-lg duration-300 py-2 px-4 rounded-r-lg border-l-2 border-cyan-500">
         <div className="flex items-center gap-2">
            <input type="checkbox" checked={is_done} onChange={handleDone} />
            <label className={`${is_done&&"line-through opacity-50 scale-90"}`}>{title}</label>
         </div>
         <div className="">
            <button onClick={handleDelete} className="text-red-700 underline">Delete</button>
         </div>
      </div>
   );
};

export default TaskList;
