"use client";
import useTaskStore from "@/store/useTaskStore";
import React, { useState } from "react";

const CreateForm = () => {
   const { tasks, addTask } = useTaskStore();
   const [input, setInput] = useState("");

   const handleAdd = () => {
      addTask({
         id: tasks.length + 1,
         title: input,
         is_done: false,
         create_at: new Date().toISOString(),
      });
      setInput("");
   };

   const handleInput = (e) => {
      setInput(e.target.value);
   };

   const handleKeyUp = (e) => {
      if (e.key == "Enter") {
         addTask({
            id: tasks.length + 1,
            title: input,
            is_done: false,
            create_at: new Date().toISOString(),
         });
         setInput("");
      }
   };
   return (
      <div className="flex items-center mb-5">
         <input
            type="text"
            value={input}
            onChange={handleInput}
            onKeyUp={handleKeyUp}
            className="border border-gray-950 py-2 px-4 rounded-l grow"
            required
         />
         <button
            onClick={handleAdd}
            className="border border-gray-950 py-2 px-4 rounded-r bg-gray-950 text-gray-50 disabled:opacity-80"
         >
            Save
         </button>
      </div>
   );
};

export default CreateForm;
