import CreateForm from "@/components/CreateForm";
import Spinner from "@/components/Spinner";
import { lazy, Suspense } from "react";

const TaskListContainer = lazy(() => import("@/components/TaskListContainer"));

export default function Home() {
   return (
      <section className="md:w-2/3 mx-auto my-10 shadow-lg p-3 md:p-5 border border-gray-300 rounded">
         <h1 className="text-3xl font-serif font-bold mb-5">Todo App</h1>
         <CreateForm />
         <Suspense fallback={<Spinner />}>
            <TaskListContainer />
         </Suspense>
      </section>
   );
}
