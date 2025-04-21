"use client";
import React from "react";
import TaskList from "./TaskList";
import useTaskStore from "@/store/useTaskStore";

const TaskListContainer = () => {
   const { tasks } = useTaskStore();
   return (
      <div className="flex flex-col gap-3 h-96 lg:h-80 2xl:h-[35rem] overflow-auto hsb">
         {tasks.map((task) => (
            <TaskList key={task.id} task={task} />
         ))}
      </div>
   );
};

export default TaskListContainer;
