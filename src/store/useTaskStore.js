const { create } = require("zustand");

const useTaskStore = create((set) => ({
   tasks: [
      {
         id: 1,
         title: "Complete project setup",
         is_done: false,
         create_at: "2024-12-14T09:00:00Z",
      },
      {
         id: 2,
         title: "Design the homepage",
         is_done: false,
         create_at: "2024-12-13T14:30:00Z",
      },
      {
         id: 3,
         title: "Implement authentication",
         is_done: false,
         create_at: "2024-12-12T08:15:00Z",
      },
      {
         id: 4,
         title: "Write unit tests for components",
         is_done: false,
         create_at: "2024-12-11T16:45:00Z",
      },
      {
         id: 5,
         title: "Deploy application to staging",
         is_done: false,
         create_at: "2024-12-11T10:00:00Z",
      },
   ],
   addTask: (newTask) => set((state) => ({ tasks: [...state.tasks, newTask] })),
   removeTask: (taskId) =>
      set((state) => ({
         tasks: state.tasks.filter((item) => item.id != taskId),
      })),
   doneTask: (taskId) =>
      set((state) => ({
         tasks: state.tasks.map((item) =>
            item.id == taskId ? { ...item, is_done: !item.is_done } : item
         ),
      })),
}));

export default useTaskStore;
